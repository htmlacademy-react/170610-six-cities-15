import { NameSpace, citiesNames } from '../../const';
import { TState } from '../../types/state';
import { getRandomCityName } from '../../utils/common';
import { getCity } from './app-process.selectors';

describe('getCity', () => {
  it('should return correct city', () => {
    const mockCity = getRandomCityName(citiesNames);
    const mockState = {
      [NameSpace.App]: {
        city: mockCity,
      },
    };
    const result = getCity(mockState as Pick<TState, NameSpace.App>);
    expect(result).toEqual(mockCity);
  });
});
