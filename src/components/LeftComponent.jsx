import React from 'react';
import './LeftComponent.css';
import {Link} from 'react-router-dom';
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
        <li><Link to={'/dashboard'}>  Dashboard</Link></li>
         <li><Link to={'/products'}> Product</Link></li>
      </ul>
    </div>
  );
};

export default LeftComponent;
