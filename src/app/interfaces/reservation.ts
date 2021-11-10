import { IDay } from './day';

export interface IReservation {
  madeAt: string;
  day: IDay;
  price: number;
  user: string;
  timeframe: string;
  gear: boolean;
  people: number;
  status: string;
  _id: string;
  __v: string;
}
