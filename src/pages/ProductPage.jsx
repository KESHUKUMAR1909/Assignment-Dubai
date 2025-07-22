import React, { useState } from 'react';
import LeftComponent from '../components/LeftComponent';
import './css/ProductPage.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const ProductPage = () => {
  const [products] = useState([
    { id: 1, name: 'iPhone 13', price: 999, stock: 12 },
    { id: 2, name: 'Samsung Galaxy S23', price: 899, stock: 5 },
    { id: 3, name: 'MacBook Pro', price: 1999, stock: 3 },
    { id: 4, name: 'AirPods Pro', price: 249, stock: 18 }
  ]);

  return (
    <div className="product-page">
      <div className="left-part-2">
        <LeftComponent />
      </div>

      <div className="right-part-2">
        <div className="top-bar">
          <h1>Products</h1>
          <button className="add-product-btn">+ Add Product</button>
        </div>

        {/* Product Table */}
        <div className="product-table-container">
          <table className="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Price ($)</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.name}</td>
                  <td>{p.price}</td>
                  <td>{p.stock}</td>
                  <td className={p.stock < 10 ? 'low-stock' : 'in-stock'}>
                    {p.stock < 10 ? 'Low' : 'In Stock'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chart */}
        <div className="chart-container">
          <h2>Stock by Product</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={products}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="stock" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
