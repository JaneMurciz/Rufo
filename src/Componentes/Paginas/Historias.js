/*import React from 'react';
import '../../App.css';

export default function Historias() {
  return <h1 className='historias'>HISTORIAS</h1>;
}*/

import React from 'react';
import '../../App.css';
import Registro_Mascota from '../../Registro_Mascota/Registro_Mascota';// Importa para el Dashboard de Mascotas
import '../../Registro_Mascota/Registro_Mascota.css';

export default function Historias() {
  return (
    <>
    <div className="cards">
        <h1>Registro de mascota:</h1>
    </div>
      <Registro_Mascota />
    </>
  );
}