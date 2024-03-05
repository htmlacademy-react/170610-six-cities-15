import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import useMap from '../../hooks/use-map.tsx';

interface TMapProps {
  city: {
    latitude: number;
    longitude: number;
  };
  offers: Array<{
    id: string;
    location: {
      latitude: number;
      longitude: number;
    };
  }>;
  activePoint: string | null;
  page: string;
  maxWidth: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: PIN_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [15, 30],
});

const currentCustomIcon = new Icon({
  iconUrl: PIN_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [15, 30],
});

export default function Map(props: TMapProps): JSX.Element {
  const { city, offers, activePoint, page, maxWidth } = props;

  const transformOffersToMap = (offers) =>
    offers.map((offer) => ({
      id: offer.id,
      location: offer.location,
    }));

  const offersMap = transformOffersToMap(offers);
  console.log('offersMap', offersMap);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  // console.log(offers);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (page === 'offer' && activePoint !== null) {
      offers.push(activePoint);
    }

    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            activePoint !== undefined && point.id === activePoint
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, activePoint, page]);

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
}
