import React from 'react'

const Footer = () => {

    const currYear = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p className='footer-text'>
            © {currYear} Movierux, All rights reserved.
            </p>
        </footer>
    )
}

export default Footer