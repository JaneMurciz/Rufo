import React from 'react';
import '../../App.css';
import Dashboard_Mascotas from '../../Dashboard_Mascotas/Dashboard_Mascotas';// Importa para el Dashboard de Mascotas
import '../../Dashboard_Mascotas/Dashboard_Mascotas.css';

function Home() {
  return (
    <>
      <Dashboard_Mascotas />
    </>
  );
}

export default Home;