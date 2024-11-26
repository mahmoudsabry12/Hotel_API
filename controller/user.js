import User from "../model/User.js"


export const createUser = async (req, res,next) =>{
    const newUser = new  User(req.body)
    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (err) {
       next(err)
    }
}


export const updateUser = async (req, res,next) =>{
    try {
        const updateUser = await Hotel.findByIdAndUpdate(req.params.id , {$set: req.body}, {new:true})
        res.status(200).json(updateUser)
    } catch (err) {
       next(err)
    }
}

export const deleteUser = async (req, res,next) =>{
    try {
        await User.findByIdAndDelete(req.params.id )
        res.status(200).json("HOTEL HAS BEEN DELETED ")
    } catch (err) {
       next(err)
    }
}

export const getUser = async (req, res,next) =>{
    try {
        const User = await User.findById(req.params.id)
        res.status(200).json(User)
    } catch (err) {
       next(err)
    }
}

export const getUsers = async (req, res,next) =>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (err) {
       next(err)
    }
}