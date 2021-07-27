import React from 'react';
import { Link } from 'react-router-dom';

export const Button = ({
    children, 
    type, 
    onClick
}) => {

    return (
        <Link to='/datos-mascota' >
            <button 
            onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    );
};