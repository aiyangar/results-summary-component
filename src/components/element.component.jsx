import React from 'react';
import data from '../data.json';
import './element.styles.css'
import image from '../assets/images/icon-reaction.svg'

const Element = () => {
  return (
    <div className='elementContainer'>
      {data.map((item, index) => (
        <div key={index} className='singleElement'>
          <img src={item.icon} alt={item.category} />
          {console.log(item.icon)}
          <img src={image}/>
          <p>{item.category}</p>
          <p>{item.score}/100</p>
        </div>
      ))}
    </div>
  );
};

export default Element;