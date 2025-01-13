import React from 'react';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#8B0000', padding: '10px' }}>
      <div
        style={{
          display: 'inline-block',
          marginRight: '10px',
          backgroundColor: 'white',
          padding: '10px',
          marginLeft: '150px',
        }}
      >
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B0000' }}>B</span>
      </div>
      <div
        style={{
          display: 'inline-block',
          marginRight: '10px',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B0000' }}>B</span>
      </div>
      <div
        style={{
          display: 'inline-block',
          marginRight: '10px',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#8B0000' }}>C</span>
      </div>
      {/* Updated style for NEWS हिंदी */}
      <span style={{ fontSize: '24px', fontWeight: 'bold', color: 'white' }}>
        NEWS हिंदी
      </span>
    </div>
  );
};

export default Header;