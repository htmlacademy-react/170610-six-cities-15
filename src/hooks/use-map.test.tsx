import { renderHook } from '@testing-library/react';
import { Map } from 'leaflet';
import { getRandomNumber } from '../utils/mocks';
import { useMap } from './use-map';

describe('Hook: useMap', () => {
  it('should create a map instance with the given data', () => {
    const mockLocation = {
      latitude: getRandomNumber(0, 15),
      longitude: getRandomNumber(0, 15),
      zoom: getRandomNumber(0, 15),
    };
    const mockContainerRef = { current: document.createElement('div') };

    const mockMapData = {
      location: mockLocation,
      containerRef: mockContainerRef,
    };

    const { result } = renderHook(() => useMap(mockMapData));
    const mockMapInstance = result.current;

    expect(mockMapInstance).toBeInstanceOf(Map);
    expect(mockMapInstance).not.toBeNull();
    expect(mockMapInstance).not.toBeUndefined();
    expect(mockMapInstance!.getCenter().lat).toEqual(mockLocation.latitude);
    expect(mockMapInstance!.getCenter().lng).toEqual(mockLocation.longitude);
    expect(mockMapInstance!.getZoom()).toEqual(mockLocation.zoom);
  });
});
