const express = require('express');
const route = express.Router();
const {adduser, updateUser, deleteUser, getAllUsers} = require("../controller/userController");

route.post('/adduser',adduser )

route.put('/updateuser/:id', updateUser )

route.delete('/deleteuser/:id', deleteUser )

route.get('/getallusers', getAllUsers )

module.exports = route;