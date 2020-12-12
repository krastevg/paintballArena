import { IDay } from './day';
export interface IMonth {
  year: number;
  name: string;
  days: IDay[];
  _id: string;
  __v: string;
}
