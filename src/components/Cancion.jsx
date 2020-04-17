import React, { Fragment } from 'react';

const Cancion = ({letra}) => {
//No se carga hasta que le envie la camcion
    if(letra.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Letra de la Canción</h2>
            <div className="letra">{letra}</div>
        </Fragment>
     );
}
 
export default Cancion;