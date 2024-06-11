import express from 'express';
import Connection from './database/db.js';
import router from './routes/route.js';
import cors from "cors";
import bodyParser from 'body-parser';


const app =express();

// app.use()

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));



app.use(cors())

app.use("/", router)

const PORT = 8012;

Connection();

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`)); 