import React, { useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/Thunk/productThunk';

import LeftComponent from '../components/LeftComponent';
import Card from '../components/Card';
import './css/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, loading, error } = useSelector((state) => state.products);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      navigate('/login');
    } else {
      dispatch(fetchProducts());
    }
  }, [dispatch, token, navigate]);

  const totalProducts = products.length;
  const lowStockProducts = products.filter((p) => p.stock < 50).length;

  const chartData = [
    { name: 'Total Products', count: totalProducts },
    { name: 'Low Stock', count: lowStockProducts }
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // refresh to clear state
  };

  return (
    <div className='dashboard'>
      <div className='left-part-2'>
        <LeftComponent />
      </div>

      <div className='right-part-2'>
        <div className='top-bar'>
          <h1>Dashboard</h1>
          <button className='logout-btn' onClick={handleLogout}>Logout</button>
        </div>

        <div className='welcome'>
          <h2>Welcome, Keshu Kumar</h2>
        </div>

        {/* 🔢 Analytics Cards */}
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
          {loading ? (
            <p>Loading chart...</p>
          ) : error ? (
            <p style={{ color: 'red' }}>{error}</p>
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
