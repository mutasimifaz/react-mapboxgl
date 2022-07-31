import React, { useEffect } from "react";

import mapboxgl from "mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3llZGVuYW0iLCJhIjoiY2w2Nnlqc2NvM2Z5bTNjbXBydm9jbjJldyJ9.0a1MGXkwIH-i9gISU1KIUQ";
const MapDirection = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [90.37499, 22.70041],
      zoom: 13,
    });

    map.addControl(
      new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      }),
      "top-left"
    );
  }, []);
  return (
    <div>
      <div id="map"></div>
    </div>
  );
};

export default MapDirection;
