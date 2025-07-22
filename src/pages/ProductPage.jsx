import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct, fetchProducts } from '../redux/Thunk/productThunk.js';
import LeftComponent from '../components/LeftComponent.jsx';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './css/ProductPage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  const [showModal, setShowModal] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleCreateProduct = () => {
    if (!newProduct.title || !newProduct.price || !newProduct.stock) return;
    dispatch(createProduct(newProduct));
    setNewProduct({ title: '', price: '', stock: '' });
    setShowModal(false);
  };

  const visibleProducts = showAll ? products : products.slice(0, 10);

  return (
    <div className="product-page">
      <div className="left-part-2">
        <LeftComponent />
      </div>

      <div className="right-part-2">
        <div className="top-bar">
          <h1>Products</h1>
          <button className="add-product-btn" onClick={() => setShowModal(true)}>+ Add Product</button>
        </div>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <h3>Add Product</h3>
              <input name="title" placeholder="Product Name" value={newProduct.title} onChange={handleChange} />
              <input name="price" type="number" placeholder="Price" value={newProduct.price} onChange={handleChange} />
              <input name="stock" type="number" placeholder="Stock" value={newProduct.stock} onChange={handleChange} />
              <div className="modal-buttons">
                <button onClick={handleCreateProduct}>Submit</button>
                <button onClick={() => setShowModal(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && (
          <>
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
                  {visibleProducts.map((p) => (
                    <tr key={p.id}>
                      <td>{p.id}</td>
                      <td>{p.title}</td>
                      <td>{p.price}</td>
                      <td>{p.stock}</td>
                      <td className={p.stock < 10 ? 'low-stock' : 'in-stock'}>
                        {p.stock < 10 ? 'Low' : 'In Stock'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {products.length > 10 && (
                <button className="show-more-btn" onClick={() => setShowAll(!showAll)}>
                  {showAll ? 'Show Less' : 'Show More'}
                </button>
              )}
            </div>

            <div className="chart-container">
              <h2>Stock by Product</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={visibleProducts}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="title" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="stock" fill="#4f46e5" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
