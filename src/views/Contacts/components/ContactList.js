import React, { useState, useEffect } from "react";
import { Button, Input, Select, Table, Tabs } from "antd";
import {
  SortAscendingOutlined,
  FilterOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { EmptyContainer, PageWithHeader } from "../../../components";
import { contactService } from "../../../services";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Layout } from "antd";
const { Sider } = Layout;

const columns = [
  {
    title: "User id",
    dataIndex: "userId",
    width: "20%",
  },
  {
    title: "Name",
    dataIndex: "name",
    render: (name) => name,
    width: "20%",
  },
  {
    title: "User Email",
    dataIndex: "email",
    width: "20%",
  },
];
function ContactList() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [pagination, setPagination] = useState({
    current: 20,
    pageSize: 50,
  });

  async function fetchContacts() {
    const recoveredContacts = await contactService.getContacts();
    setContacts(recoveredContacts.data.sort(function(x, y){
      let a = x.name.toUpperCase(),
      b = y.name.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
    }));
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  function handleTableChange(pagination, filters) {}
  function onTabChange(key) {}
  async function onSearch(value) {
    debugger;
    if(value){
      const recoveredContacts = await contactService.searchContact(value);
      setContacts(recoveredContacts.data);
    }
    else
    {
      fetchContacts();
    }
  }
  function onSelectChange(value) {}

  function onAddContact() {
    navigate("/contacts/new");
  }
  function onChat() {
    navigate("/messages");
  }
  return contacts.length ? (

    <Layout>
    <PageWithHeader
      navigate={navigate}
      title="Contacts"
      actions={[
        <Button key={"sendmessagebtn"} onClick={onChat} type="primary">
          Send Message
        </Button>,
        <Button key={"addcontactbtn"} onClick={onAddContact} type="primary">
          Add Contacts
        </Button>,
      ]}
    > 
      <Tabs
        defaultActiveKey="1"
        onChange={onTabChange}
        style={{
          width: "100%",
          backgroundColor: "#fff",
          paddingRight: "24px",
          paddingLeft: "24px",
        }}
      >
        <Tabs.TabPane tab="All" key="all">
          <section
            style={{
              display: "flex",
              flexDirection: "row",
              paddingBottom: "12px",
            }}
          >
            <Input.Search
              placeholder="Search contacts..."
              onSearch={onSearch}
            ></Input.Search>
            <section style={{ display: "flex", flexDirection: "row" }}>
              <Select
                placeholder="Domain"
                style={{ width: 120 }}
                onChange={onSelectChange}
              >
                <Select.Option value="gmail">@gmail.com</Select.Option>
                <Select.Option value="tech">@tech.com</Select.Option>
                <Select.Option value="jala">@jala.com</Select.Option>
              </Select>
              <Select
                placeholder="Status"
                style={{ width: 120 }}
                onChange={onSelectChange}
              >
                <Select.Option value="Active">Active</Select.Option>
                <Select.Option value="Archive">Archive</Select.Option>
              </Select>
              <Button icon={<FilterOutlined />}>More Filters</Button>
              <Button icon={<StarOutlined />}>Save Filters</Button>
              <Button icon={<SortAscendingOutlined />}>Sort</Button>
            </section>
          </section>
          <Table
            columns={columns}
            rowKey={(record) => record.id}
            dataSource={contacts}
            pagination={pagination}
            onChange={handleTableChange}
          />
        </Tabs.TabPane>
      </Tabs>
    </PageWithHeader></Layout>
  ) : (
    <EmptyContainer description={<span>Add and manage your contacts</span>}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span>
          This is where you’ll add contacts, can also import and export your
          contacts.
        </span>
        <div style={{ padding: "24px" }}>
          <Button onClick={onAddContact} type="primary">
            Add Contacts
          </Button>
          <Button>Import Contacts</Button>
        </div>
      </div>
    </EmptyContainer>
  );
}

ContactList.propTypes = {};

export default ContactList;