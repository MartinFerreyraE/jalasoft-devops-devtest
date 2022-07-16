import React from "react";
import { Layout, Menu, Breadcrumb, Collapse, Input} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
const { TextArea } = Input;

function Messages(props) {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
        <Link to='/contacts/all' style={{backgroundColor: '#001529'}}>
            <h2 style={{color: 'white', padding: '5px', margin: 'auto', position: 'absolute'}}>Return to Contacts</h2>
        </Link>
      <Layout className="site-layout">
        <Layout.Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        />
        <Breadcrumb
            style={{
              margin: '16px 10px',
              background: '#dddddd'
            }}
          >
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Martín</Breadcrumb.Item>
          </Breadcrumb>
          
        <Layout.Content
          style={{
            margin: '0 16px',
            alignItems: 'center',
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Mail to <br />
            <Input placeholder="default size" style={{padding: '10px', marginBottom: '10px', width:'40%'}} prefix={<UserOutlined />} />
            <br />
            <TextArea style={{width:'40%'}} rows={4} />
            
          </div>
        </Layout.Content>
        <Layout.Footer
          style={{
            textAlign: 'center',
          }}
        >
          Message page created for Devtest
        </Layout.Footer>
      </Layout>
    </Layout>
  );
}

export default Messages;
