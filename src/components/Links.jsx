import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <div style={{ backgroundColor: '', padding: '10px' }}>
      <ul
        style={{
          display: 'flex',          
          listStyle: 'none',        
          padding: 0,               
          margin: 0,
        }}
      >
        {['भारत', 'विदेश', 'मनोरंजन', 'खेल', 'विज्ञान-टेक्नोलॉजी', 'सोशल', 'वीडियो', 'पॉडकास्ट'].map((item, index) => (
          <li
            key={index}
            style={{
              margin: '0 30px',         
              marginLeft: index === 0 ? '150px' : '0', 
              position: 'relative',
            }}
          >
            {/* Update the Link for भारत */}
            <Link
              to={item === 'भारत' ? '/india' : `/page${index + 1}`} // Dynamically link to /india when item is 'भारत'
              style={{
                textDecoration: 'none', 
                color: 'black',         
                paddingBottom: '5px',
                display: 'inline-block',
              }}
              onMouseEnter={(e) => {
                e.target.style.borderBottom = '4px solid #8B0000';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderBottom = 'none';
              }}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
