import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './layout.css'

export default function Layout () {
  return (
    <div>
      <main className='Layout'>
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
