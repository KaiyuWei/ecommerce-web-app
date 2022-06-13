import { AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;

const Header = () => {
    const [current, setCurrent] = useState('');
    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
      };

    const items = [
        {
          label: <Link to='/'>Home</Link>,
          key: 'home',
          icon: <AppstoreOutlined />,
        },
        {
            label: 'Username',
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
              {
                  label: 'Option 1',
                  key: 'setting:1',
              },
              {
                  label: 'Option 2',
                  key: 'setting:2',
              },
            ],
        },
        {
            label: <Link to='/register'>Register</Link>,
            key: 'register',
            icon: <UserAddOutlined />,
            style: { marginLeft: 1060},   // problem: hard-coded margin
        },
        {
            label: <Link to='/login'>Login</Link>,
            key: 'login',
            icon: <UserOutlined />,
            style: { marginLeft: 'auto'},
        },               
      ];

    return <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header