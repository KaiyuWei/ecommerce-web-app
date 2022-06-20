import { AppstoreOutlined, SettingOutlined, 
  UserOutlined, UserAddOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import firebase from 'firebase/compat/app';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const {SubMenu} = Menu;

const Header = () => {
    const [current, setCurrent] = useState('home');
    let history = useHistory();
    let dispatch = useDispatch();
    let {user} = useSelector((state) => ({...state})); 

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
    };
      
    const items = [
        {
          label: <Link to='/'>Home </Link>, //- {JSON.stringify(user)}
          key: 'home',
          icon: <AppstoreOutlined />,
        },
        
        ...(user ? [{
          label: (user ? user.email.split('@')[0] : 'Username'),
          key: 'SubMenu',
          icon: <SettingOutlined />,
          style: { marginLeft: 'auto' },
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
            }
          ],
        }] : []),

        ...(user ? [] :[
              {
                label: <Link to='/register'>Register</Link>,
                key: 'register',
                icon: <UserAddOutlined />,
                style: { marginLeft: 'auto'}   // problem: hard-coded margin
              },
              {
                label: <Link to='/login'>Login</Link>,
                key: 'login',
                icon: <UserOutlined />,
                style: { marginLeft: 0}
              }
            ]
          ),      
      ];
  
    return <Menu  onClick={handleClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header