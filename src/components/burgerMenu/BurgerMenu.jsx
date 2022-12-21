import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './burgerMenu.css'

export default function BurgerMenu() {
    const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className='burgerMenu-open'>
        <button className='burgerMenu-button' onClick={() => setIsOpen(false)}>
          <p className='burgerMenu-button-cross'>x</p>
        </button>
        <ul className='burgerMenu-ul'>
            <li className='burgerMenu-li'><Link className='burgerMenu-link' to='/home'>Accueil</Link></li>
            <li className='burgerMenu-li'><Link className='burgerMenu-link' to='/about'>A Propos</Link></li>
        </ul>
    </div>
  ) : (
    <div className='burgerMenu-close'>
        <button className='burgerMenu-button' onClick={() => setIsOpen(true)}>
          <span></span>
        </button>
    </div>
  )
}