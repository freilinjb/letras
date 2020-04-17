import React, { Fragment } from 'react';

const Cancion = ({letra}) => {
    return ( 
        <Fragment>
            <h2>Letra de la Canción</h2>
            <div className="letra">{letra}</div>
        </Fragment>
     );
}
 
export default Cancion;