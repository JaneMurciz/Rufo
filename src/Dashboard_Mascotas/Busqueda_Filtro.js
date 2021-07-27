import React from 'react';

class Search_Filtro extends React.Component{

    constructor(props){
        super(props);
    }

    onChangeEvent = e =>{ // Detecta la busqueda de la consulta y la convierte a minusculas
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(e.target.value);
    }
    
    render(){
        return(
            <input type="text" onChange={this.onChangeEvent} />
        );
    }
}

export default Search_Filtro;