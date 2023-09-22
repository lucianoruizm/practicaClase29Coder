import businessModel from "../models/order.model"

export default class Business {
    getBusiness = async () => {
        try {
            let business = await businessModel.find()
            return business
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getBusinessById = async (id) => {
        try {
            let result = await businessModel.findOne({_id: id})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    createBusiness = async (business) => {
        try {
            let result = await businessModel.create(business)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    updateBusiness = async (business, id) => {
        try {
            let result = await businessModel.updateOne({_id:id}, {$set:business})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}