import React, {useState, useEffect} from 'react';
import './Item_Mascota.css';
import { Link } from 'react-router-dom';
import { Button } from './Button'
import '../Datos_Mascota/Datos_Mascota.css';
import '../Componentes/Navbar.css';

function Item_Mascota(props){
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

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
        <ul className='card__items'>
            <Link className='cards__item__link'>
                <figure className='cards__item_pic-wrap'>
                    <img src={'imagenes/' + props.image} width="100%" />
                </figure>
                <div className="cards__item__info">
                    <h5 className='cards__item__text'>
                        <div className="nombre">{props.nombre}</div>
                    </h5>
                    <h5 className='cards__item__text2'>
                        <div className="textos">
                            <label>Raza: </label>
                            <div className="raza">{props.raza}</div>
                        </div>
                        <div className="textos">
                            <label>Sexo: </label>
                            <div className="sexo">{props.sexo}</div>
                        </div>
                        <div className="textos">
                            <label>Talla: </label>
                            <div className="talla">{props.talla}</div>
                        </div>
                        <div className="textos">
                            <label>Edad: </label>
                            <div className="edad">{props.edad}</div>
                        </div>
                        <div className="btn-vermas">
                            <Link to='/datos-mascota' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Ver más
                            </Link>
                            {button && <Button buttonStyle='btn--outline'>Ver más</Button>}
                        </div>
                    </h5>
                    
                </div>
            </Link>
        </ul>         
    </>
    );
}

export default Item_Mascota;