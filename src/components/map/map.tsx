import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  latitude: number;
  longitude: number;
  zoom: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && latitude !== undefined && longitude !== undefined) {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
      mapInstance.current = L.map(mapRef.current).setView(
        [latitude, longitude],
        zoom
      );
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        mapInstance.current
      );
    }
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};
export default Map;
