import React, { useState } from "react";
import { Form, Modal } from "antd";
import Layout from "../components/Layouts/Layout";
import Input from "antd/es/input/Input";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Layout>
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
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
