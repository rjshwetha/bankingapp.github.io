// import { book } from "../routes/books.js";

import { createNewCustomer, getAllCustomer, getCustomerById } from "../services/customer.js";





export async function handleGetAllCustomer(req,res){
    const customer = await getAllCustomer();
    res.send(customer);
}

export async function handlerGetByIdCustomer(req,res){
    const id = req.params.customersId;
    console.log(id)
    
    const customer = await getCustomerById(id);

    res.status(200).send(customer);
}

export async function handlerDeleteByIdCustomer(req,res){
    const id = req.params.customerId;
    
    res.status(200).send( await deleteCustomerById(id));

}

export async function handlerPostCustomer(req,res, next){
    
    const data = req.body;

    try {
        const newCustomer = await createNewCustomer(data);

        
        res.status(201).send(newCustomer); 
    } catch (err) {
        next(err)
    }


}

export async function handlerUpdateById(req,res){


    const data = req.body;

    const id = req.params.customerId;

    const d = await updateCustomerById(id,data)

    res.status(200).send(d);
}