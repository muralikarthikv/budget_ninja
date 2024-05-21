const express = require("express");
const {
  addTransaction,
  getAllTransaction,
} = require("../controllers/transactionController");
//router object
const router = express.Router();
//routes
//add transection POST MEthod
router.post("/add-transaction", addTransaction);
//get transactions
router.post("/get-transactions", getAllTransaction);
module.exports = router;
