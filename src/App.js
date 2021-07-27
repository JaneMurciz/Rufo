import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Componentes/Paginas/Home';
import Adopta from './Componentes/Paginas/Adopta';
import Conocenos from './Componentes/Paginas/Conocenos';
import Historias from './Componentes/Paginas/Historias';
import Datos_Mascota from './Datos_Mascota/Datos_Mascota';


class App extends React.Component {

  constructor(props){
    super(props);

  }

  render(){
    return (
      <>
      <Router>
        <div className="app">
          <Navbar title="PATITAS DE LA CALLE"/> 
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/adopta' exact component={Adopta}/>
            <Route path='/historias' exact component={Historias}/>
            <Route path='/conocenos' exact component={Conocenos}/>
            <Route path='/datos-mascota' exact component={Datos_Mascota}/>
          </Switch>
          <Footer />
        </div>
      </Router>
      </>
    );
  }
}

export default App;