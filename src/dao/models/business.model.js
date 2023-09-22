import mongoose from 'mongose'

const collection = 'Orders'
const schema = new mongoose.Schema({
    number: String,
    name: String,
    name: String,
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Orders'
    }]
})

const userModel = mongoose.model(collection. schema)
export default usersModel