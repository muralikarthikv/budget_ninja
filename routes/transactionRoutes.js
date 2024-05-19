const express= require("express");
const { addTransaction, getAllTransaction } = require("../controllers/transactionController");
//router object
const router = express. Router();
//routes
//add transection POST MEthod
router.post('/add-transection', addTransaction)
//get transactions
router.post('/get-transaction', getAllTransaction)
module.exports= router;