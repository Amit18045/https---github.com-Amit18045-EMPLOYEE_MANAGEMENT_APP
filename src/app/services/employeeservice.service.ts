import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse } from '../model/interface/master';
import { Employee } from '../model/class/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private https = inject(HttpClient);
  Api_URL = "https://projectapi.gerasim.in/api/EmployeeManagement/";

  getAllDepart(): Observable<IApiResponse> {
    return this.https.get<IApiResponse>(`${this.Api_URL}GetParentDepartment`);
  }

  getChildDeptById(parentId: number): Observable<IApiResponse> {
    return this.https.get<IApiResponse>(`${this.Api_URL}GetChildDepartmentByParentId?deptId=${parentId}`)
  }

  saveEmployee(obj: Employee): Observable<IApiResponse> {
    return this.https.post<IApiResponse>(`${this.Api_URL}CreateEmployee`, obj);
  }
  getAllEmployee(): Observable<Employee []> {
    return this.https.get<Employee []>(`${this.Api_URL}GetAllEmployees`);
  }
  updateEmployee(obj:Employee):Observable<IApiResponse>{
    return this.https.put<IApiResponse>(`${this.Api_URL}UpdateEmployee/${obj.employeeId}`,obj);
  }

  deleteEmployeeBYId(empID:number):Observable<IApiResponse>{
return this.https.delete<IApiResponse>(`${this.Api_URL}DeleteEmployee/${empID}`);
  }
}
