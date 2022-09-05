import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import customerRouter from "./routes/customers.js";
import accountsRouter from "./routes/account.js";


const port = 8080;

const url = 'mongodb://localhost:27017/bankingDB'

const app = express();
app.use(express.json())
app.use(cors());

app.use(customerRouter);
app.use(accountsRouter)










app.get('/greeter', (req, res) => {
    res.send('Good Afternoon');
})

async function initServer(){
     try {
        await mongoose.connect(url);
        app.listen(port,() => {
            console.log('database connected')
            console.log(`server running on ${port}`)
        });
    } catch (error) {
        console.log('unable to connect with databases')
    }
}
initServer();




