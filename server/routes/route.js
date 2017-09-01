var express = require('express')
var router = express.Router();

var userdetailController = require('../controllers/userdetailsControllers')

router.get('/user',userdetailController.getAll)
router.post('/user',userdetailController.createUser)
router.put('/user/:id',userdetailController.updateUser)
router.delete('/user/:id',userdetailController.deleteUser)

module.exports = router;