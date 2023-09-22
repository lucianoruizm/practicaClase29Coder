import usersModel from "../models/user.model"

export default class User {
    getUsers = async () => {
        try {
            let users = await usersModel.find()
            return users
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getUserById = async (id) => {
        try {
            let result = await usersModel.findOne({_id: id})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    saveUser = async (user) => {
        try {
            let result = await usersModel.create(user)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    updateUser = async (user, id) => {
        try {
            let result = await usersModel.updateOne({_id:id}, {$set:{status:'resolved'}})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}