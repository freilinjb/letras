import React from 'react';

const Formulario = () => {
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
                                <input type="text" name="artista" className="form-control" placeholder="Nombre del Artista" aria-describedby="helpId"/>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="cancion">Cancion</label>
                                    <input type="text" name="cancion" className="form-control" placeholder="Nombre del Artista" aria-describedby="helpId"/>
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