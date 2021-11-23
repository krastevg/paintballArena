import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IStatistic } from '../interfaces/statistic';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  apiString = `${environment.apiUrl}`;
  constructor(private http: HttpClient) {}

  createAdmin(formData): Observable<any> {
    return this.http.post(`${this.apiString}/admin`, formData);
  }

  deleteUser(formData): Observable<any> {
    return this.http.delete(`${this.apiString}/admin/user/${formData.email}`);
  }

  getRevenueByDate(formData): Observable<IStatistic> {
    return this.http.get<IStatistic>(
      `${this.apiString}/admin/revenue/date?start=${formData.start}&end=${formData.end}`
    );
  }

  getRevenueByUser(formData): Observable<IStatistic> {
    return this.http.get<IStatistic>(
      `${this.apiString}/admin/revenue/user?email=${formData.email}`
    );
  }
}
