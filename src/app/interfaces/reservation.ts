import { IDay } from './day';

export interface IReservation {
  madeAt: string;
  day: IDay;
  price: number;
  user: string;
  hours: string;
  people: number;
  _id: string;
  __v: string;
}
