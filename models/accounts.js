import mongoose from "mongoose";


const {Schema, model} = mongoose;


const transactionHistorySchema = new Schema({
    transactions_type: {
        type: String,
        required: true,
        enum: ['Credit','Debit']
    },
    amount: {
        type: Number,
        required: false
    },
    transactionDate: {
        type: String,
        required: false
    }
})

const accountSchema = new Schema({
    type: {
        type: String,
        required: true
        // enum: ['Saving','Current']
    },
    balance: {
        type: Number,
        required: true
    },
    transactions: [transactionHistorySchema]

})

const account = model('accounts', accountSchema);

export default account;