import leaflet, { Map } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL_PATTERN } from '../const';
import { TLocation } from '../types/offer';

type UseMapProps = {
  location: TLocation;
  containerRef: React.RefObject<HTMLElement | null>;
};

export const useMap = ({ location, containerRef }: UseMapProps): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  // const [map, setMap] = useState<LeafletMap | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location]);

  return map;
};
