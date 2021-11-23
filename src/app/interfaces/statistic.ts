import { IReservation } from './reservation';

export interface IStatistic {
  startDate: Date;
  endDate: Date;
  reservations: {
    totalNumber: number;
    canceled: number;
    complete: number;
    active: number;
  };
  payments: {
    online: number;
    inPerson: number;
  };
  totalRevenue: number;
  reservationsArray: IReservation[];
  queryType: string;
  forUser: string;
}
