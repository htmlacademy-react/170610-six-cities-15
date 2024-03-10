import leaflet, { Map } from 'leaflet';
import React, { useEffect, useRef, useState } from 'react';
import { TILE_LAYER_ATTRIBUTION, TILE_LAYER_URL_PATTERN } from '../const';
import { TLocation } from '../types/offer';

type UseMapProps = {
  containerRef: React.RefObject<HTMLElement | null>;
  location: TLocation | undefined;
  offers: TOffers;
};

export const useMap = ({
  location = undefined,
  containerRef,
  offers = [],
}: UseMapProps): Map | null => {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect((): void => {
    const DEFAULT_LOCATION =
      offers && offers.length > 0
        ? offers[0].location
        : { latitude: 0, longitude: 0, zoom: 1 };
    if (containerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(containerRef.current, {
        center: {
          lat: location ? location.latitude : DEFAULT_LOCATION.latitude,
          lng: location ? location.longitude : DEFAULT_LOCATION.longitude,
        },
        zoom: location ? location.zoom : DEFAULT_LOCATION.zoom,
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
