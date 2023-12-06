import React from 'react';
import data from '../data.json';
import './element.styles.css';

const Element = () => {
  return (
    <div className='elementContainer'>
      {data.map((item, index) => (
        <div key={index} className='singleElement' style={{ backgroundColor: item.backgroundColor }}>
          <div className="imageAndCategory">
            <img src={item.icon} alt={item.category} />
            <p style={{ color: item.color }}>{item.category}</p>
          </div>
          <div className="score">
            <h4 className='scoreNumber'>{item.score}</h4>
            <p>/100</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Element;
