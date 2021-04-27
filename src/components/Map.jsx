import React, { useEffect, useState } from "react";
import {
  useMap,
  TileLayer,
  LayerGroup,
  ZoomControl,
  MapContainer,
  LayersControl
} from "react-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import { Typography } from "@material-ui/core";
import L from "leaflet";
import "leaflet-ellipse";

const maps = {
  base: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
};

const Map = () => {
  const [map, setMap] = useState(null);

  return (
    <>
      <MapContainer
        center={[37.0902, -95.7129]}
        zoom={3}
        zoomControl={false}
        style={{ height: "100vh", width: "100%", padding: 0 }}
        whenCreated={map => setMap(map)}
      >
        <LayersControl position="topright">
          <LayersControl.BaseLayer checked name="Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url={maps.base}
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default Map;
