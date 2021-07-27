import React from 'react';
import Item_Datos from './Item_Datos';

function Card_Datos(props){
  return(
    <div className="cards">
        <h1>Adopta!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    { // Función de mapeo 
                            props.items.map(item =>
                                <Item_Datos 
                                    key={item.id}
                                    id={item.id}
                                    nombre={item.nombre}
                                    imagen={item.imagen}
                                    raza={item.raza}
                                    sexo={item.sexo}
                                    talla={item.talla}
                                    edad={item.edad}
                                    color={item.color}
                                    personalidad={item.personalidad}
                                    descripcion={item.descripcion}
                                    necesidades={item.necesidades} />
                        )
                    }
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Card_Datos;