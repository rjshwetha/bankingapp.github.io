import express from "express";
import { handleGetAllCustomer, handlerDeleteByIdCustomer, handlerGetByIdCustomer, handlerPostCustomer, handlerUpdateById } from "../handlers/customers.js";



const customerRouter = express.Router();

// studentRouter.use(logit);
// booksRouter.use(booksExits)

customerRouter.get('/customers', handleGetAllCustomer)

customerRouter.get('/customers/:customersId', handlerGetByIdCustomer)

customerRouter.delete('/customers/:customerId', handlerDeleteByIdCustomer)

customerRouter.post('/customers', handlerPostCustomer)

customerRouter.put('/customers/:customerId', handlerUpdateById);


export default customerRouter;
