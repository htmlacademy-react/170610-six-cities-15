import { NameSpace, citiesNames } from '../../const';
import { getRandomCityName } from '../../utils/common';
import { getCity } from './app-process.selectors';

describe('getCity function tests', () => {
  it('test_getCity_returnsCity', () => {
    const mockCity = getRandomCityName(citiesNames);
    const mockState = {
      [NameSpace.App]: {
        city: mockCity,
      },
    };
    const result = getCity(mockState);
    expect(result).toEqual(mockCity);
  });
});
