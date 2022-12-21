import React from 'react'
import { Link } from 'react-router-dom'
import logo from '@/assets/footerLogo.png'
import './footer.css'

export default function Footer () {
  return (
    <footer>
      <Link className='footer-link' to='/home'>
        <img src={logo} alt='Logo Kasa' />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}
