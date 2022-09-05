// import { book } from "../routes/books.js";

import { createNewAccount, deleteAccountById, getAccountById, getAllAccount, updateAccountById } from "../services/account.js";






export async function handleGetAllAccount(req,res){
    const account = await getAllAccount();
    res.send(account);
}

export async function handlerGetByIdAccount(req,res){
    const id = req.params.accountId;
    console.log(id)
    
    const ac = await getAccountById(id);

    res.status(200).send(ac);
}

export async function handlerDeleteByIdAccount(req,res){
    const id = req.params.customerId;
    
    res.status(200).send( await deleteAccountById(id));

}

export async function handlerPostAccount(req,res, next){
    
    const data = req.body;

    try {
        const newAccount = await createNewAccount(data);

        
        res.status(201).send(newAccount); 
    } catch (err) {
        next(err)
    }


}

export async function handlerUpdateById(req,res){


    const data = req.body;

    const id = req.params.customerId;

    const d = await updateAccountById(id,data)

    res.status(200).send(d);
}