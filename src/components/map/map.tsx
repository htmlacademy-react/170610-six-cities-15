import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useState } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const';
import { Offers } from '../../types/offer';

type MapProps = {
  defaultLatitude: number;
  defaultLongitude: number;
  defaultZoom: number;
  markersData: Offers;
  maxWidth?: number;
  hoveredOfferId?: string;
};

const Map: React.FC<MapProps> = ({
  defaultLatitude,
  defaultLongitude,
  defaultZoom,
  markersData,
  maxWidth = 500,
  hoveredOfferId,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<L.Map | null>(null);
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

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

      markersData.forEach((offer) => {
        const { latitude, longitude } = offer.location;
        const marker = L.marker([latitude, longitude]);

        // Устанавливаем иконку в зависимости от активного оффера
        const iconUrl =
          offer.id === activeOfferId ? PIN_MARKER_CURRENT : PIN_MARKER_DEFAULT;

        const customIcon = L.icon({
          iconUrl,
          iconSize: [27, 39],
          iconAnchor: [15, 30],
        });

        marker.setIcon(customIcon);

        if (mapInstance.current) {
          marker.addTo(mapInstance.current);
        }
      });
    }
  }, [
    defaultLatitude,
    defaultLongitude,
    defaultZoom,
    markersData,
    activeOfferId,
  ]);

  // Обновляем состояние активного оффера при изменении hoveredOfferId
  useEffect(() => {
    if (hoveredOfferId !== undefined) {
      setActiveOfferId(hoveredOfferId);
    }
  }, [hoveredOfferId]);

  // Обрабатываем сброс активного оффера при наведении на карточку
  useEffect(() => {
    if (!hoveredOfferId) {
      setActiveOfferId(null);
    }
  }, [hoveredOfferId]);

  return (
    <div
      ref={mapRef}
      style={{
        height: '100%',
        width: '100%',
        maxWidth: `${maxWidth}px`,
        margin: '0 auto',
      }}
    />
  );
};

export default Map;
