const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
  userid: {
    type: String,
    required:[true],
  },
  date: {
    type: String,
    required: [true, "data is required"],
  },
  amount: {
    type: Number,
    required: [true, "amount is required"],
  },
  type:{
    type: String,
    required: [true, "type is required"],
  },
  category: {
    type: String,
    required: [true, "cat is required"],
  },
  reference: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "desc is required"],
  },
},{timestamps:true});
const transactionModel = mongoose.model("transactions", transactionSchema);
module.exports=transactionModel;
