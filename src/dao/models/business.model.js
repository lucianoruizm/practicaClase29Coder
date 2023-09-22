import mongoose from 'mongose'

const collection = 'Business'
const schema = new mongoose.Schema({
    name: String,
    products: []
})

const businessModel = mongoose.model(collection, schema)
export default businessModel