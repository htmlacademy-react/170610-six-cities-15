import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import { useMap } from '../../hooks/use-map.tsx';
import { TCity, TOffers } from '../../types/offer.ts';

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

export const Map: ({
  city,
  offers,
  activeOfferId,
  page,
}: {
  city: string;
  offers: TOffers;
  activeOfferId: string;
  page: string;
}) => Element = ({ city, offers, activeOfferId, page }): Element => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const map = useMap({
    location: city.location,
    containerRef: mapContainerRef,
  });
  const markerLayer = useRef(leaflet.layerGroup());

  useEffect((): void => {
    if (map) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom,
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect(() => {
    if (map) {
      markerLayer.current.clearLayers();

      offers.forEach((offer) => {
        const marker = leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon:
              offer.id === activeOfferId ? activeMarkerIcon : defaultMarkerIcon,
          },
        );

        marker.addTo(markerLayer.current);
      });
    }
  }, [activeOfferId, map, offers]);

  return <section className={`${page}__map map`} ref={mapContainerRef} />;
};
