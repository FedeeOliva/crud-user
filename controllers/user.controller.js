const User = require('../models/user.model');
const Profile = require('../models/profile.model');

const getUsers = async (req, res) => {
    const users = await User.find({}).populate({
        path: "profile",
        select: {
            name: 1,
            lastName: 1
        }
    });
    res.status(200).json({users})
}

const getUser = async (req, res) => {
    const user = await User.findById(req.params.id).populate({
        path: "profile",
        select: {
            name: 1,
            lastName: 1
        }
    })
    res.status(200).json({user});
}

const createUser = async (req, res) => {
    const user = User(req.body.user)
    const profile = Profile(req.body.profile)
    user.profile = profile._id
    profile.user = user._id
    await user.save()
    await profile.save()
    return res.status(200).json({user, profile})
}

const deleteUser = async (req, res) => {
    const user = await findById(req.params.id)
    await User.deleteOne({id: req.params.id})
    await Profe.deleteOne({id: user.profile})
    res.status(200).json({msg: "Usuario Borrado"})
}

const editUser = (req, res) => {
    
    res.status(200).json({users: ['user']})
}


module.exports = {getUsers, createUser, getUser, deleteUser, editUser}