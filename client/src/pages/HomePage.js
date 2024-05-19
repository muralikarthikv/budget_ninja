import React, { useEffect, useState } from "react";
import { Form, Modal, Select, message } from "antd";
import Layout from "../components/Layouts/Layout";
import Input from "antd/es/input/Input";
import axios from 'axios'
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading,setLoading] =useState(false);
  const [allTransaction,setAllTransaction]=useState([])
  // getall transactions
  const getAllTransaction=async ()=>{
    try {
      const user=JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      const res=await axios.post('/transactions/get-transactions',{userid: user._id})
      setLoading(false)
      setAllTransaction(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
      message.error('Fetch issues with transactions');
    }
  }
  // useEffect hook
  useEffect(()=>{
    getAllTransaction();
  },[])
  const handleSubmit = async(values) => {
    try {
      const user=JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transaction/add-transaction',{...values,userid:user._id})
      setLoading(false)
      message.success("Transaction added successfully")
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      message.error("Failed to add transaction")
    }
  };
  return (
    <Layout>
      {loading && <Spinner/>}
      <div className="filters">
        <div>Range Filter</div>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add New
        </button>
      </div>
      <div className="content"></div>
      <Modal
        title="Add Transaction"
        open={showModal}
        onCancel={() => setShowModal(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="type" name="type">
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="tip">Tip</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
              <Select.Option value="medical">medical</Select.Option>
              <Select.Option value="fee">fee</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Date" name="date">
            <Input type="date" />
          </Form.Item>
          <Form.Item label="Refrence" name="refrence">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              {" "}
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
