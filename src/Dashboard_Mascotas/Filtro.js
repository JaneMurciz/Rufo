import React from 'react';
import Busqueda_Filtro from './Busqueda_Filtro';
import './Dashboard_Mascotas.css';

class Dashboard_Mascota extends React.Component{

    constructor(props){
        super(props);

    }

    render(){
        return(
            // Estructura del Dashboard de Mascotas
            <div className="cards">
                <h1>Busca tu mascota!</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <div className="search">
                                <Busqueda_Filtro onsearch={this.props.onsearch} />
                            </div>
                            <div className="actions">
                                <ul className="filtros">
                                    <div className="filtroRaza">
                                        <p></p>
                                        Raza:
                                        <select value={this.props.filtroraza}>
                                            <option value="Todo">Todo</option>
                                            <option value="Criollo">Criollo</option>
                                            <option value="Shiba Inu">Shiba Inu</option>
                                            <option value="Pomerania">Pomerania</option>
                                        </select>
                                    </div>
                                    <div className="filtroSexo">
                                        <p></p>
                                        Sexo:
                                        <select value={this.props.filtrosexo}>
                                            <option value="Todo">Todo</option>
                                            <option value="Masculino">Masculino</option>
                                            <option value="Femenino">Femenino</option>
                                        </select>
                                    </div>
                                    <div className="filtroTalla">
                                        <p></p>
                                        Talla:
                                        <select value={this.props.filtrotalla}>
                                            <option value="Todo">Todo</option>
                                            <option value="Pequeña">Pequeña</option>
                                            <option value="Mediana">Mediana</option>
                                            <option value="Grande">Grande</option>
                                        </select>
                                    </div>
                                    <div className="filtroEdad">
                                        <p></p>
                                        Edad:
                                        <select value={this.props.filtroedad}>
                                            <option value="Todo">Todo</option>
                                            <option value="Meses">Meses</option>
                                            <option value="1 año">1 año</option>
                                            <option value="2 años">2 años</option>
                                            <option value="3 años">3 años</option>
                                            <option value="4 años">4 años</option>
                                            <option value="5 años">5 años</option>
                                            <option value="6 años">6 años</option>
                                        </select>
                                    </div>
                                </ul>
                            </div>
                    </ul>
                </div>
            </div>
        </div>
        );
    }
}

export default Dashboard_Mascota;