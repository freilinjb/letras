import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import axios from 'axios';

function App() {

  //definir el state
  const [busquedaLetram, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');

  //cuando cambie la busqueda realiza la consulta
  useEffect(() => {
    //Verifica si el objeto esta bacio 
    if(Object.keys(busquedaLetram).length === 0) return;

    //si no esta vacio se ejecuta
    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaLetram;

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

      const resultado = await axios(url); 

      setLetra(resultado.data.lyrics);
    }

    consultarApiLetra();

  },[busquedaLetram]);
  
  return (  
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
