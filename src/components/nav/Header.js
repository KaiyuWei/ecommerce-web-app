import { AppstoreOutlined, SettingOutlined, 
  UserOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const {SubMenu} = Menu;

const Header = () => {
    const [current, setCurrent] = useState('home');
    let history = useHistory();
    let dispatch = useDispatch();

    const handleClick = (e) => {
        // console.log(e.key);
        setCurrent(e.key);
      };

    const logout = () => {
      firebase.auth().signOut();
      dispatch({
        type: "LOGOUT",
        payload: null,
      });
      history.push("/login");
    }
      
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
              {
                label: <item onClick={logout}>Logout</item>,
                key: 'setting:3',
                icon: <LogoutOutlined />
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