var models = require('../models')
var Sequelize = models.Sequelize;
var sequelize = models.sequelize;

var userdetails = models.userdetails;
var store = models.store;
var warehouse = models.warehouse;

exports.getAll =function(req,res){

	console.log("In All")
	userdetails.findAll(
		{
			include:[
				{model:store,as:'storelist'},
				{model:warehouse,as:'warehouselist'}
			]
			
		}
	)
	.then(function(data){
 		 return res.status(200).send({message:"Data retieve successfully",msgtype:"S",Data:data,ErrorData:null})
	})
	.catch(function(err){
		console.log(err)
		return res.status(500).send({message:"Oops something went wrong",msgtype:"E",Data:null,ErrorData:err})
	})
}


exports.getById =function(req,res){
		var _id = req.params.id;
		userdetails.findById(_id,{include:[{model:store,as:'storelist'}]})
		.then(function(data){
			  return res.status(200).send({message:"Data retieve successfully",msgtype:"S",Data:data,ErrorData:null})
		})
		.catch(function(err){
			console.log(err)
			return res.status(500).send({message:"Oops something went wrong",msgtype:"E",Data:null,ErrorData:err})
		})
	}

exports.createUser = function(req,res){

	var data = req.body;

	userdetails.create(data)
	.then(function(result){
		console.log("Create Successfull");		
		return res.status(201).send({message:"Data save successfully",msgtype:"S",Data:result,ErrorData:null})
	})
	.catch(function(err){
		console.log("Create Exception : " + err);
		console.log("Create Exception Object: " + JSON.stringify(err));
		return res.status(500).send({message:"Oops something went wrong",msgtype:"E",Data:null,ErrorData:err.msg})
	})
}

exports.updateUser = function(req,res){

	var _id = req.params.id;
	var uptdata = req.body; 
	userdetails.findById(_id)
	.then(function(data){
		console.log("first find : " + data);
		return userdetails.update(uptdata,{where : {id : _id}})
	})
	.then(function(data){
		console.log("update data : " + data);
		return res.status(201).send({message:"Data updated successfully",msgtype:"S",Data:data,ErrorData:null})
	})
	.catch(function(err){
		return res.status(500).send({message:"Oops something went wrong",msgtype:"E",Data:null,ErrorData:err})
	})
}

exports.deleteUser = function(req,res){

	var _id = req.params.id;

	console.log("deleteion Id : " + _id)

	userdetails.findById(_id)
	.then(function(data){
		console.log("first find : " + JSON.stringify(data));
		return data.destroy()
	})
	.then(function(data){
		console.log("deleted data : " + JSON.stringify(data));
		return res.status(201).send({message:"Data deleted successfully",msgtype:"S",Data:data,ErrorData:null})
		})
	.catch(function(err){
		console.log("exception : " + err)
		return res.status(500).send({message:"Oops something went wrong",msgtype:"E",Data:null,ErrorData:err})
	})
}