import React from 'react';
import './Registro_Mascota.css'

function Registro_Mascota(props){
    return(
        // Estructura del Registro para Perro
        <div className="container">
            <div className="subcontainer">
                <p></p>
                <label>Fecha de ingreso: </label>
                <input type="text"/>
                <p></p>
                <label>Status: </label>
                <input type="text"/>
                <p></p>
                <label>Especie: </label>
                <input type="text"/>
                <p></p>
                <label>Raza: </label>
                <input type="text"/>
                <p></p>
                <label>Color: </label>
                <input type="text"/>
                <p></p>
                <label>Sexo: </label>
                <input type="text"/>
                <p></p>
                <label>Edad: </label>
                <input type="text"/>
                <p></p>
                <label>Talla: </label>
                <input type="text"/>
                <p></p>
            </div>
        </div>
    );
}

export default Registro_Mascota;