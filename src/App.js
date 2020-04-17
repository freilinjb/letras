import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info  from './components/Info';
import axios from 'axios';

function App() {

  //definir el state
  const [busquedaLetram, setBusquedaLetra] = useState({});
  const [letra, setLetra] = useState('');
  const [info, setInfo] = useState({});
   
  //cuando cambie la busqueda realiza la consulta
  useEffect(() => {
    //Verifica si el objeto esta bacio 
    if(Object.keys(busquedaLetram).length === 0) return;

    //si no esta vacio se ejecuta
    const consultarApiLetra = async () => {

      const { artista, cancion } = busquedaLetram;

      const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      const [letra, informacion ] = await Promise.all([
        axios(url1),
        axios(url2)
      ]);

      setLetra(letra.data.lyrics);
      setInfo(informacion.data.artists[0]);
       
      // setLetra(resultado.data.lyrics);
    }

    consultarApiLetra();

  },[busquedaLetram, info]);
  
  return (  
    <Fragment>
      <Formulario setBusquedaLetra={setBusquedaLetra}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Cancion letra={letra}/>
          </div>
          <div className="col-md-6">
            <Info info={info}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
