import React from 'react';

const Info = ({info}) => {

    //verifica si un objecto viene vacio
    if(Object.keys(info).length === 0) return null;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Informacion del Artista
            </div>
            <div className="card-body">
                <img src={info.strArtistThumb} alt="Foto del Artista"/>
            </div>
        </div>
     );
}
 
export default Info;