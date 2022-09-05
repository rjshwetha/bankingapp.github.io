import express from "express";
import { handleGetAllAccount, handlerDeleteByIdAccount, handlerGetByIdAccount, handlerPostAccount, handlerUpdateById } from "../handlers/account.js";



const accountsRouter = express.Router();

// studentRouter.use(logit);
// booksRouter.use(booksExits)

accountsRouter.get('/accounts', handleGetAllAccount)

accountsRouter.get('/accounts/:accountId', handlerGetByIdAccount)

accountsRouter.delete('/accounts/:accountId', handlerDeleteByIdAccount)

accountsRouter.post('/accounts', handlerPostAccount)

accountsRouter.put('/accounts/:accountId', handlerUpdateById);


export default accountsRouter;
