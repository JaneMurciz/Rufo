import React from 'react';
import Lista_Mascota from './Lista_Mascota';
import Filtro from './Filtro';
import './Dashboard_Mascotas.css';

class Dashboard_Mascota extends React.Component {

    constructor(props){
      super(props);
  
      this.state = {
        mascotas:[
          {id:0, nombre: 'Rufo', raza: 'Criollo', sexo: 'Masculino', talla: 'Pequeña', edad: '4 años', image: 'rufo.jpg'},
          {id:1, nombre: 'Xi', raza: 'Shiba Inu', sexo: 'Masculino', talla: 'Pequeña', edad: '6 años', image: 'xi.jpg'},
          {id:2, nombre: 'Pinky', raza: 'Criollo', sexo: 'Femenino', talla: 'Pequeña', edad: '2 años', image: 'pinky.jpg'},
          {id:3, nombre: 'Frida', raza: 'Pomerania', sexo: 'Femenino', talla: 'Pequeña', edad: '2 años', image: 'frida.jpg'}
        ],
        copyMascotas: []
      };
    }
  
    componentDidMount(){
      this.initMascotas();
    }
  
    initMascotas = () =>{
      this.setState((state, props) => ({
        copyMascotas: [ ... state.mascotas]
      }));
    }
  
    onSearch = (query) =>{ // Función para la busqueda
      if(query === ''){ // Si la consulta es vacia, se copiaran las mascotas
        this.setState({copyMascotas: [...this.state.mascotas]});
      }else{ // Si contiene texto
        const temp = [...this.state.mascotas]; // Crea arreglo temporal de las mascotas
        let res = []; // Crea otro arreglo temporal, que se va a devolver
  
        temp.forEach(item =>{ // Por cada elemento se va a recorrer
          if(item.raza.toLowerCase().indexOf(query) > -1){ // si la consulta es mayor a -1, se añadira al arreglo de res (resultado)
            res.push(item);
          }
          if(item.sexo.toLowerCase().indexOf(query) > -1){ // si la consulta es mayor a -1, se añadira al arreglo de res (resultado)
            res.push(item);
          }
          if(item.talla.toLowerCase().indexOf(query) > -1){ // si la consulta es mayor a -1, se añadira al arreglo de res (resultado)
            res.push(item);
          }
          if(item.edad.toLowerCase().indexOf(query) > -1){ // si la consulta es mayor a -1, se añadira al arreglo de res (resultado)
            res.push(item);
          }
        });
        this.setState({copyMascotas: [...res]});
      }
    }
  
    render(){
        return(
            <div className="dashboard">
                <Filtro onsearch={this.onSearch} />
                <Lista_Mascota items={this.state.copyMascotas} />
            </div>
        );
    }
}

export default Dashboard_Mascota;