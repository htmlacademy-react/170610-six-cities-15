import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import { activeMarkerIcon, defaultMarkerIcon } from '../../../const.ts';
import { useMap } from '../../../hooks/use-map.tsx';
import { TCity, TOffers } from '../../../types/offer.ts';

type TMapProps = {
  city?: TCity | undefined;
  offers: TOffers;
  activeOfferId?: string | null;
  page: string;
};

function Map({ city, offers, activeOfferId, page }: TMapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);

  const map = useMap({
    location: city ? city.location : undefined,
    containerRef: mapRef,
  });

  const markers = useRef(leaflet.layerGroup());

  useEffect(() => {
    if (map && city && city.location) {
      map.setView(
        [city.location.latitude, city.location.longitude],
        city.location.zoom
      );
      markers.current.addTo(map);
      markers.current.clearLayers();
    }
  }, [map, city, offers]);

  useEffect(() => {
    if (map) {
      markers.current.clearLayers();

      offers.forEach((offer) => {
        if (offer && offer.location) {
          const marker = leaflet.marker(
            [offer.location.latitude, offer.location.longitude],
            {
              icon:
                activeOfferId === offer.id
                  ? activeMarkerIcon
                  : defaultMarkerIcon,
            }
          );

          marker.addTo(markers.current);
        }
      });
      markers.current.addTo(map);
    }
  }, [activeOfferId, map, offers]);

  return <section className={`${page}__map map`} ref={mapRef} />;
}

export default Map;
