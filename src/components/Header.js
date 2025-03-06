import React from 'react'
import '../styles.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src = 'logo.png' alt='movierux' />
        <h2 className='app-subtitle'>It's time for popcorn! Find your favorite movie here.</h2>
    </div>
  )
}

export default Header