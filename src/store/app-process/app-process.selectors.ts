import { NameSpace } from '../../const';
import { TState } from '../../types/state';

export const getCity = (state: Pick<TState, NameSpace.App>): string =>
  state[NameSpace.App].city;
