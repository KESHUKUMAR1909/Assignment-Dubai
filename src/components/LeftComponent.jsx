import React from 'react';
import './LeftComponent.css';

const LeftComponent = ({ width }) => {
  return (
    <div className='left-part' style={{ width }}>
      <div className='user-profile'>
        <div>
          <h1>Welcome</h1>
          <h2>Keshu Kumar</h2>
        </div>
      </div>

      <ul className='navigation-part'>
        <li>Dashboard</li>
        <li>Products</li>
      </ul>
    </div>
  );
};

export default LeftComponent;
