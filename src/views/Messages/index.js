import React from "react";
import { Layout, Menu, Breadcrumb, Collapse} from "antd";
import { UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";


function Messages(props) {
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
        
      <Layout.Sider collapsible collapsed={Collapse.collapsed} onCollapse={(value) => Collapse.setCollapsed(value)}>
        <div className="logo" />
        <Link to='/' style={{backgroundColor: '#001529'}}>
            <h2 style={{color: 'white', padding: '20px', margin: 'auto'}}>Jalasoft</h2>
        </Link>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'User 1',
            },
            {
              key: '2',
              icon: <UserOutlined />,
              label: 'User 2',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'User 3',
            },
          ]}
        />
      </Layout.Sider>
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
          }}
        >
          
          <div
            className="site-layout-background"
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            Hello Martín.
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
