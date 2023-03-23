import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom'; 
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';

const navbar = () => {
  return (
    <div className="nav_container">
      <div className="logo_container">
        <Avatar src={icon} size="large" />
    
        <Typography.Title level={2} className="logo">
          <Link to="/">Coinzone</Link>
        </Typography.Title>
        {/* <button className="menu_control_container">

        </button> */}
      </div>
    </div>
  )
}

export default navbar