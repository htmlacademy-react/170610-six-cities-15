import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import { useMap } from '../../hooks/use-map.tsx';
import { TCity, TOffers } from '../../types/offer.ts';

type TMapProps = {
  city: TCity;
  offers: TOffers;
  activeOfferId?: string | null;
  page: string;
};

const activeMarkerIcon = leaflet.icon({
  iconUrl: PIN_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const defaultMarkerIcon = leaflet.icon({
  iconUrl: PIN_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export const Map = ({
  city,
  offers,
  activeOfferId,
  page,
}: TMapProps): JSX.Element => {
  const mapRef = useRef<HTMLDivElement>(null);
  const map = useMap({ location: city.location, containerRef: mapRef });
  const markers = useRef(leaflet.layerGroup());

  useEffect(() => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      markers.current.addTo(map);
      markers.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      markers.current.clearLayers();

      offers.forEach((offer) => {
        const marker = leaflet.marker(
          [offer.location.latitude, offer.location.longitude],
          {
            icon:
              activeOfferId === offer.id ? activeMarkerIcon : defaultMarkerIcon,
          }
        );

        marker.addTo(markers.current);
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className={`${page}__map map`} ref={mapRef} />;
};
