import leaflet, { Map } from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL_PATTERN } from '../const';
import { TOffers, TLocation } from '../types/offer';

type UseMapProps = {
  location?: TLocation | undefined;
  containerRef: React.RefObject<HTMLDivElement>;
  offers?: TOffers;
};

export const useMap = ({
  location = undefined,
  containerRef,
  offers = [],
}: UseMapProps): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location ? location.latitude : 0,
          lng: location ? location.longitude : 0,
        },
        zoom: location ? location.zoom : 0,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL_PATTERN, {
          attribution: TILE_LAYER_ATTRIBUTION,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [containerRef, location, offers]);

  return map;
};
