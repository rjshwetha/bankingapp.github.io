import account from "../models/accounts.js";




export let totalAmount = 0;

export async function createNewAccount(data){

    

    // data.forEach(e => {
    //     console.log(e.balance)
    // });
   

    let ac = new account(data);
    
    ac = await ac.save();

    totalAmount += ac.balance

    console.log(totalAmount)

    return ac;
}

export async function getAccountById(id){

    console.log(id)

    const data =  await account.findById(id).exec();

    // const acc = data.accounts[0]._id;
    // console.log(acc)

    // const acco = await account.findById(acc).exec();

    // acco.transactions.push({
    //     transactions_type: "Debit",
    //     amount: 50,
    //     transactionDate: "54/54/55"
    // })

   

    // console.log(acco)

    return data



    
}

export async function getAllAccount(){
    const ac =  await account.find().exec()
    

    return ac;
   
}

export async function deleteAccountById(id){

    const ac = await account.findByIdAndDelete(id).exec();
    return ac;
}

export async function updateAccountById(id,data){
    return await account.findByIdAndUpdate(id,data, {
        returnDocument: "after"
    }).exec();
}


