import { Resto } from 'src/services/interfaces/restaurant';

export interface RestoListScreenState {
  restaurants: Resto[],
  isLoading: boolean,
  query: string
}
