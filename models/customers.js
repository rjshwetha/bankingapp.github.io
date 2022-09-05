import mongoose from "mongoose";



const {Schema, model} = mongoose;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    totalBalance: {
        type:Number,
        required: false
    },
    accounts: [{
        type: Schema.Types.ObjectId,
        ref: 'accounts'
    }]

})



const user = model('Customers', customerSchema);

export default user;