import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import styled from "styled-components";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  overflow: hidden;
`;

const SideBar = styled.div`
  background-color: rgba(216, 34, 42, 0.9);
  color: #fffffe;
  padding: 6px 12px;
  font-family: monospace;
  margin: 12px;
  border-radius: 4px;
`;

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [140, 38],
      },
      properties: {
        title: "Mapbox",
        description: "Center of the map",
      },
    },
  ],
};

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(140.7309);
  const [lat, setLat] = useState(38.778);
  const [zoom, setZoom] = useState(4.21);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for the map to initialize
    map.current.on("contextmenu", (e) => {
      console.log(e.lngLat);
    });
  });

  useEffect(() => {
    if (!map.current) return;
    geojson.features.forEach((marker) => {
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .addTo(map.current);
    });
  }, []);

  return (
    <>
      <Container>
        <SideBar>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </SideBar>
        <div ref={mapContainer} className='map-container' />
      </Container>
    </>
  );
};

export default Map;
