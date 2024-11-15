const express= require('express')
const cors= require('cors')
const morgan=require('morgan')
const dotenv=require('dotenv')
const colors=require('colors')
const connectDb = require('./config/connectDb')
// config dotenv file
dotenv.config();
// database call
connectDb();
//rest object
const app=express()
//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
//routes
app.use('/api/v1/users' , require('./routes/userRoutes'))
//transections routes 
app.use("/api/v1/transactions", require("./routes/transactionRoutes")); 

//ports
const PORT = 8080 || process.env.PORT

//listen
app.listen(PORT,() => {
    console.log(`server running on port ${PORT}`);
})