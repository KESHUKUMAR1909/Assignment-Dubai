import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

import LeftComponent from '../components/LeftComponent';
import Card from '../components/Card';
import './css/Dashboard.css';

const Dashboard = () => {
  const chartData = [
    { name: 'Products', count: 7 },
    { name: 'Low Stock', count: 100 }
  ];

  return (
    <div className='dashboard'>
      <div className='left-part-2'>
        <LeftComponent />
      </div>

      <div className='right-part-2'>
        <div className='top-bar'>
          <h1>Dashboard</h1>
          <button className='logout-btn'>Logout</button>
        </div>

        <div className='welcome'>
          <h2>Welcome, Keshu Kumar</h2>
        </div>

        {/* 🔢 Card Section from chartData */}
        <div className='card-container'>
          {chartData.map((item, index) => (
            <Card
              key={index}
              styles={{
                backgroundColor: '#f3f4f6',
                width: '250px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              }}
              count={item.count}
              title={item.name}
            />
          ))}
        </div>

        {/* 📊 Chart Section */}
        <div className='chart-container'>
          <h2>Product Analytics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
