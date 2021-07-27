import React from 'react';
import './Solicitud_Adopcion.css'

function Solicitud_Adopcion(props){
    return(
        // Estructura del Registro para Perro
        <div className="container">
            <div className="subcontainer">
                <p></p>
                <label>Nombre: </label>
                <input type="text"/>
                <p></p>
                <label>Edad: </label>
                <input type="text"/>
                <p></p>
                <label>Email: </label>
                <input type="text"/>
                <p></p>
                <div className="button-sig">
                    <button>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Solicitud_Adopcion;