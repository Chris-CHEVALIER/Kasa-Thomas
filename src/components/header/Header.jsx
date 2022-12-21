import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '@/assets/headerLogo.png';
import BurgerMenu from '@/components/burgerMenu/BurgerMenu';

export default function Header() {

    return(
            <header>
                <Link className='header-link-logo' to='/home'>
                    <img className='header-logo' src={logo} alt='Logo Kasa'/>
                </Link>
                <nav className='nav-normal'>
                    <ul>
                        <li><Link className='header-link' to='/home'>Accueil</Link></li>
                        <li><Link className='header-link' to='/about'>A Propos</Link></li>
                    </ul>
                </nav>
                <div className='BurgerMenu-nav-hidden'>
                    <BurgerMenu />
                </div>    
            </header>
    );
};