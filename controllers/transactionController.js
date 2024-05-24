const transactionModel = require("../models/transactionModel");
const moment = require('moment');
const getAllTransaction = async (req, res) => {
    try {
        const { frequency, selectedDate, type } = req.body;
        // Build the query
        let dateQuery = {};
        if (frequency !== 'custom') {
            const days = Number(frequency);
            dateQuery = {
                date: {
                    $gt: moment().subtract(days, 'days').toISOString()
                }
            };
        } else if (selectedDate && selectedDate.length === 2) {
            dateQuery = {
                date: {
                    $gte: moment(selectedDate[0]).startOf('day').toISOString(),
                    $lte: moment(selectedDate[1]).endOf('day').toISOString()
                }
            };
        }
        const typeQuery = type !== 'all' ? { type } : {};
        const transactions = await transactionModel.find({
            userid: req.body.userid,
            ...dateQuery,
            ...typeQuery
        });

        res.status(200).json(transactions);
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
const deleteTransaction=async(req,res)=>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).send('Deleted Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const editTransaction =async (req,res)=>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        res.status(200).send('Editted Successfully')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

const addTransaction = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).send("Transaction Created");
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
};
module.exports = { getAllTransaction, addTransaction ,editTransaction,deleteTransaction };
