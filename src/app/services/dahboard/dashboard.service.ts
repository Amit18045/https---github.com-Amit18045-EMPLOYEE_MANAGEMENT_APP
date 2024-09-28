import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApiResponse } from '../../model/interface/master';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private https = inject(HttpClient);
  Api_URL = "https://projectapi.gerasim.in/api/EmployeeManagement/";

  getAllDashboard(): Observable<any> {
    return this.https.get<any>(`${this.Api_URL}GetDashboard`);
  }

}
