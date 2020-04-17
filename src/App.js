import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import axios from 'axios';

function App() {

  //definir el state
  const [busquedaLetram, setBusquedaLetra] = useState({});

  //cuando cambie la busqueda realiza la consulta
  useEffect(() => {
    //Verifica si el objeto esta bacio 
    if(Object.keys(busquedaLetram).length === 0) return;

    //si no esta vacio se ejecuta
    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaLetram;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url); 

      console.log(resultado.data.lyrics);
      

    }

    consultarApiLetra();

  },[busquedaLetram]);
  
  return (  
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra}/>
    </Fragment>
  );
}

export default App;
