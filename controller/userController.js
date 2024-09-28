const User = require("../model/userModel");

const adduser = async(req, res) => {
     await User.create({
         username: req.body.username,
         email: req.body.email,
         password: req.body.password
     })
     return res.status(201).send({success:"successfully created"})
}


const updateUser = async (req, res) => {
    const id = req.params.id;
   await User.findByIdAndUpdate(id, req.body)
    return res.status(201).send({success:"successfully updated"})
}

const deleteUser = async  (req, res) => {
    const id = req.params.id;
    await User.findByIdAndDelete(id, req.body)
     return res.status(201).send({success:"successfully Deleted..."})
}
const getAllUsers = async  (req, res) => {
    const users = await User.find({})
    return res.send(users)

}



module.exports = {adduser, updateUser, deleteUser, getAllUsers}