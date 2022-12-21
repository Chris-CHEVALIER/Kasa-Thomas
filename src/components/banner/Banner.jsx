import React from 'react';
import './banner.css';

export default function Banner(props) {
  return (
    <div className='banner'>
        <img className='banner-pic' src={props.pic} alt="Un paysage" />
        {props.title && (
          <h1 className='banner-title'>{props.title}</h1>
        )}   
    </div>
  );
};
