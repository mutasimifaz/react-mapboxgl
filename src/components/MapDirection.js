import React, { useEffect } from 'react';

import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
 
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.374990, 22.700410],
            zoom: 13
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    }, [])
    return ( 
        <div>
            
            <div id="map"></div>
        </div>
        
     );
}
 
export default MapDirection;