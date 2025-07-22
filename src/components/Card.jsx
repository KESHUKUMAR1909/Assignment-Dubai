import React from 'react';

const Card = ({ styles, title, count }) => {
  return (
    <div style={styles}>
      <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>{title}</p>
      <p style={{ fontSize: '24px', color: '#4f46e5' }}>{count}</p>
    </div>
  );
};

export default Card;
