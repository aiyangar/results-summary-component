import React from 'react';
import data from '../data.json';
import './element.styles.css'

const Element = () => {
  return (
    <div className='elementContainer'>
      {data.map((item, index) => (
        <div key={index} className='singleElement'>
          <div className="imageAndCategory">
            <img src={item.icon} alt={item.category} />
            <p>{item.category}</p>
          </div>
          
          <p>{item.score}/100</p>
        </div>
      ))}
    </div>
  );
};

export default Element;