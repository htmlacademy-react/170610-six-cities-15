import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferWithComments } from '../../types/offerWithComments';

type MapProps = {
  defaultLatitude: number;
  defaultLongitude: number;
  defaultZoom: number;
  markersData: OfferWithComments[];
};

const Map: React.FC<MapProps> = ({
  defaultLatitude,
  defaultLongitude,
  defaultZoom,
  markersData,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);

  useEffect(() => {
    if (
      mapRef.current &&
      defaultLatitude !== undefined &&
      defaultLongitude !== undefined
    ) {
      if (mapInstance.current) {
        mapInstance.current.remove();
      }
      mapInstance.current = L.map(mapRef.current).setView(
        [defaultLatitude, defaultLongitude],
        defaultZoom
      );
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        mapInstance.current
      );

      markersData.forEach((markerData) => {
        const { latitude, longitude } = markerData.offer.location;
        if (mapInstance.current) {
          L.marker([latitude, longitude]).addTo(mapInstance.current);
        }
      });
    }
  }, [defaultLatitude, defaultLongitude, defaultZoom, markersData]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
