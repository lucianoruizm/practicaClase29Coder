import orderModel from "../models/order.model"

export default class Order {
    getOrders = async () => {
        try {
            let order = await orderModel.find()
            return order
        } catch (error) {
            console.log(error)
            return null
        }
    }

    getOrderById = async (id) => {
        try {
            let result = await orderModel.findOne({_id: id})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    createOrder = async (order) => {
        try {
            let result = await orderModel.create(order)
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }

    resolveOrder = async (order, id) => {
        try {
            let result = await orderModel.updateOne({_id:id}, {$set:order})
            return result
        } catch (error) {
            console.log(error)
            return null
        }
    }
}