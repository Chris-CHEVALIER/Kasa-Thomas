import React from 'react';
import { Link } from 'react-router-dom';
import './error.css';

export default function Error() {
    return (
        <div className='error-container'>
            <h1 className='error-title'>404</h1>
            <h2 className='error-txt'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link className='error-link' to='/home'>Retourner sur la page d’accueil</Link>
        </div>
    );
};