import React from 'react'
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({ title, id, cover }) {
  return (
    <div className='card' key={title + id}>
        <Link className='card-link' to={`/housing/${id}`}>
                <div className='card-background'></div>
                <img className='card-pic' src={cover} alt={title} />
                <h2 className='card-title'>{title}</h2>
            
        </Link>
    </div>
  )
}
