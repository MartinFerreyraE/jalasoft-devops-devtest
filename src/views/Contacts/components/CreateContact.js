import React, { useCallback } from "react";
import { PageWithHeader } from "../../../components";
import { Form, Input, Button, message } from "antd";
import { MailOutlined, UserAddOutlined } from "@ant-design/icons";
import { contactService } from "../../../services";
import { useNavigate } from "react-router-dom";

function CreateContact() {
  const navigate = useNavigate();
  const onFinish = useCallback(
    async (values) => {
      try {
        await contactService.addContact(values);
        navigate(-1);
      } catch (error) {
        message.error(error.message);
      }
    },
    [navigate]
  );

  return (
    <PageWithHeader
      title="Create a contact"
      navigate={navigate}
      enabledBackButton
    >
      <section style={{ width: "500px", padding: "40px" }}>
        <Form name="create_contact" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="E-mail" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
                whitespace: true,
              },
            ]}
          >
            <Input prefix={<UserAddOutlined />} placeholder="Name" />
          </Form.Item>
          <Form.Item>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Save Contact
            </Button>
          </Form.Item>
        </Form>
      </section>
    </PageWithHeader>
  );
}

export default CreateContact;
