import React from 'react';
import './Datos_Mascota.css';
import { Link } from 'react-router-dom';

function Item_Datos(props){
    return(
        <>
        <ul className='card__items'>
            <Link className='cards__item__link'>
                <figure className='cards__item_pic-wrap'>
                    <img src={'imagenes/' + props.imagen} width="100%" />
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
                        <div className="textos">
                            <label>Color: </label>
                            <div className="color">{props.color}</div>
                        </div>
                        <div className="textoextra">
                            <label>Personalidad: </label>
                            <div className="personalidad">{props.personalidad}</div>
                        </div>
                        <div className="textoextra">
                            <label>Descripcion: </label>
                            <div className="descripcion">{props.descripcion}</div>
                        </div>
                        <div className="textoextra">
                            <label>Necesidades especiales: </label>
                            <div className="necesidades">{props.necesidades}</div>
                        </div>
                    </h5>
                </div>
            </Link>
        </ul>         
    </>

    );
}

export default Item_Datos;