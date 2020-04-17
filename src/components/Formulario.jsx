import React, { useState } from 'react';

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    });

    const actualizarState = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }

    const { artista, cancion } = busqueda;

    return ( 
        <div className="bg-info"> 
            <div className="container">
                <div className="row">
                    <form className="col text-white bg-transparent mb-5 pt-5 pb-2">
                        <fieldset>
                            <legend className="text-center">Buscador de Letras de Canciones</legend>
                        </fieldset>
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                <label htmlFor="artista">Artista</label>
                                <input type="text" name="artista" value={artista} className="form-control" placeholder="Nombre del Artista" onChange={actualizarState}/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="cancion">Cancion</label>
                                    <input type="text" name="cancion" value={cancion} className="form-control" placeholder="Nombre del Artista" onChange={actualizarState}/>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-danger float-right">Buscar</button>
                    </form>
                </div>

            </div>
        </div>
     );
}
 
export default Formulario;