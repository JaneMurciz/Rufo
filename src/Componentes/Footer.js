import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className='footer-container'>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Acerca de nosotros</h2>
                        <Link to=''>¿Quienes somos?</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contactanos</h2>
                        <Link to=''>Telefono</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;