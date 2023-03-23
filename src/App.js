import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="app">
      <div className="navbar" />
      <div className="main" />
      <div className="footer" />
    </div>
  );
}

export default App;
