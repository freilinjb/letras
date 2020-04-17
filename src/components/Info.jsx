import React from 'react';

const Info = ({info}) => {

    const { strArtistThumb, strGenre, strBiographyES } = info;

    //verifica si un objecto viene vacio
    if(Object.keys(info).length === 0) return null;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-danger text-light font-weight-bold">
                Informacion del Artista
            </div>
            <div className="card-body"> 
                <img src={strArtistThumb } alt="Foto del Artista"/>
                <p className="card-text">Género: {strGenre}</p>
                <h2 className="card-text">Biografía</h2>
                <p className="card-text">Género: {strBiographyES}</p>
            </div>
        </div>
     );
}
 
export default Info;