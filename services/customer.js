import user from "../models/customers.js";

import account from "../models/accounts.js";



export async function createNewCustomer(data){
   

    let customer = new user(data);
    customer = await customer.save();

    return customer;
}

export async function getCustomerById(id){
    console.log(id,"----")


    const data =  await user.findById(id).populate('accounts').exec();

    // return data.address
    let total = 0 ;
    data.accounts.forEach(e => {
        total+=e.balance;
    });
    
    const acc = data.accounts[0]._id;
    console.log(acc)

    const acco = await account.findById(acc).exec();

    acco.transactions.push({
        transactions_type: "Debit",
        amount: 50,
        transactionDate: "54/54/55"
    })

   

    console.log(acco)

    return data



   

    // const check = data.accounts[0].Transctions

    // console.log(check.transactionHistory)

    
}

export async function getAllCustomer(){
    const customer =  await user.find().populate('accounts').exec()

    

  

    customer.forEach( e => {

        let totalBalance = 0;
        
        e.accounts.forEach( m => {
            totalBalance+=+m.balance
           
        })
        
        e.totalBalance = totalBalance;
        // data+=","+totalBalance
    })

    
    

    return customer;
   
}

export async function deleteCustomerById(id){

    const customer = await user.findByIdAndDelete(id).exec();
    return customer;
}

export async function updateCustomerById(id,data){


    return await user.findByIdAndUpdate(id,data, {
        returnDocument: "after"
    }).exec();
}


