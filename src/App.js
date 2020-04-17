import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';

function App() {

  //definir el state
  const [busquedaLetram, setBusquedaLetra] = useState({});

  //cuando cambie la busqueda realiza la consulta
  useEffect(() => {
    //Verifica si el objeto esta bacio 
    if(Object.keys(busquedaLetram).length === 0) return;

    //si no esta vacio se ejecuta
    console.log('no se ejecuta');
    
  },[busquedaLetram]);

  return (  
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra}/>
    </Fragment>
  );
}

export default App;
