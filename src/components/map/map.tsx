import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import useMap from '../../hooks/use-map.tsx';
import { TLocation } from '../../types/offer.ts';
import { TOffers } from '../../types/offer.ts';

type TMapProps = {
  city: TLocation;
  offers: TOffers;
  activePoint: string | null;
  page: string;
  maxWidth: number;
};

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

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
    }
  }, [map, city]);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(
            activePoint !== undefined && offer.id === activePoint
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
