import './HomePages.css'
import React, { useState } from 'react';
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
];
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Button, Layout, Menu, Table, theme } from 'antd';
import logo from '../../assets/logo.svg';
const { Header, Sider, Content } = Layout;

const HomePages = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  // table

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name_en',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Name_ru',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Images',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <Layout style={{height:"100vh" , padding:'1px 0'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{margin: "20px 0 ", display:'flex', alignItems:"center", justifyContent:"center" }}>
      <img src={logo} style={{ width: "70px", height: "70px" , display:"inline-block" }} />
      </div>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          >
<div className='wrapper-exit'>
<Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <button className='btn'> <LogoutOutlined/> Chiqish</button>
</div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
     <Table dataSource={dataSource} columns={columns} />;
        </Content>
      </Layout>
    </Layout>
  );
};
export default HomePages;