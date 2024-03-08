import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { PIN_MARKER_CURRENT, PIN_MARKER_DEFAULT } from '../../const.ts';
import { useMap } from '../../hooks/use-map.tsx';
import { TLocation, TOffers } from '../../types/offer.ts';

type TMapProps = {
  city: TLocation;
  offers: TOffers;
  activeOfferId?: string | null;
  maxWidth: number;
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

export const Map: React.FC<TMapProps> = ({
  city,
  offers,
  activeOfferId,
  maxWidth,
  page,
}): Element => {
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
        city.location.zoom
      );
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  }, [city, map]);

  useEffect((): void => {
    if (map) {
      offers.forEach((offer): void => {
        leaflet
          .marker(
            {
              lat: offer.location.latitude,
              lng: offer.location.longitude,
            },
            {
              icon:
                offer.id === activeOfferId
                  ? activeMarkerIcon
                  : defaultMarkerIcon,
            }
          )
          .addTo(markerLayer.current);
      });
    }
  }, [activeOfferId, map, offers]);

  return (
    <section
      className={`${page}__map map`}
      ref={mapContainerRef}
      // style={{
      //   maxWidth: `${maxWidth}px`,
      // }}
    />
  );
};
