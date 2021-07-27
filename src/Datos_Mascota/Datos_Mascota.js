import React from 'react';
import './Datos_Mascota.css';
import Card_Datos from './Card_Datos';
import '../App.css';
import '../Solicitud_Adopcion/Solicitud_Adopcion.css';
import Solicitud_Adopcion from '../Solicitud_Adopcion/Solicitud_Adopcion';


class Datos_Mascota extends React.Component {

    constructor(props){
      super(props);
  
      this.state = {
        mascota:[
            {id:0, nombre: 'Rufo', raza: 'Criollo', sexo: 'Masculino', talla: 'Pequeña', edad: '4 años', imagen: 'rufo.jpg', color: 'Cafe', personalidad: 'Jugueton', descripcion: 'Perrito adorable busca dueño.', necesidades: 'Ninguna.'},
          ]
      };
    }
  
    render(){
        return(
            <div className="dashboard">
                <Card_Datos items={this.state.mascota} />
                <div className="cards">
                    <h1>Llena la solicitud:</h1>
                </div>
                <Solicitud_Adopcion />
            </div>
        );
    }
}

export default Datos_Mascota;