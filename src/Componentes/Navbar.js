/*import React, {useState} from 'react';
import './Navbar.css';

function Navbar(props){
    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo">
                        {props.title}
                    </div>
                    <div className="image"> 
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYtC1QV1eIVHnXMrDGHUhQEgPagOltGKUww&usqp=CAU"  width="10%"/>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

.navbar{
    background-color: rgb(49, 92, 145);
    padding: 5px;
    margin: 0 auto;
    font-weight: bold;
    outline: none;
    font-family: Arial;
}

.navbar-container{
    width: 800px;
    margin: 0 auto;
}

.logo{
    text-align: center;
    color: #fff;
    font-weight: bolder;
    font-size: 20px;
}
.image{
    display: inline-block;
    padding: 10px;
    margin: 0px;
    width: 50%;
}
*/
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar(props){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <div className="logo">
                            {props.title}
                        </div>
                        <div className="image"> 
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYtC1QV1eIVHnXMrDGHUhQEgPagOltGKUww&usqp=CAU"  width="10%"/>
                        </div>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bats'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/conocenos' className='nav-links' onClick={closeMobileMenu}>
                                Conocenos
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/adopta' className='nav-links' onClick={closeMobileMenu}>
                                Adopta
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/historias' className='nav-links' onClick={closeMobileMenu}>
                                Historias
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;