import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProjectEmployee } from '../../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class PemployeeService {
private https = inject(HttpClient);
private Api_URL = "https://projectapi.gerasim.in/api/EmployeeManagement/";


getProjectEmp():Observable<IProjectEmployee []>{
  return this.https.get<IProjectEmployee []>(`${this.Api_URL}GetAllProjectEmployees`);
}

saveProjectEmp(obj:IProjectEmployee):Observable<IProjectEmployee>{
  return this.https.post<IProjectEmployee>(`${this.Api_URL}CreateProjectEmployee`,obj);
}

updateProjectEmp(obj:IProjectEmployee):Observable<IProjectEmployee >{
  return this.https.put<IProjectEmployee>(`${this.Api_URL}UpdateProjectEmployee/${obj.empProjectId}`,obj);
}
}
