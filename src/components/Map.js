import React, { useEffect } from 'react';
import USAMap from 'react-usa-map';

const Map = (props) => {
    let mapHandler = (e) => {
        alert(e.target.dataset.name);
    };

    return (
        <div>
            <USAMap onClick = { (e) =>  mapHandler(e) } />
        </div>
    );
}

export default Map