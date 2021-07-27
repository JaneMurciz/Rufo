import React from 'react';
import Item_Mascota from './Item_Mascota';
import OpcionesBusqueda from './OpcionesBusqueda';

function Lista_Mascota(props){
    return(
        <div className="cards">
            <h1>Busquedas destacadas:</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        { // Función de mapeo que itera el arreglo de mascotas
                            props.items.map(item =>
                                <OpcionesBusqueda 
                                    key={item.id}
                                    id={item.id}
                                    image={item.image}
                                    raza={item.raza}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
            <h1>Adopta!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        { // Función de mapeo que itera el arreglo de mascotas
                                props.items.map(item =>
                                    <Item_Mascota 
                                        key={item.id}
                                        id={item.id}
                                        nombre={item.nombre}
                                        image={item.image}
                                        raza={item.raza}
                                        sexo={item.sexo}
                                        talla={item.talla}
                                        edad={item.edad} 
                                        />
                                )
                            }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Lista_Mascota;