import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiResponse, IProject } from '../../model/interface/master';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private https = inject(HttpClient);
  Api_URL = "https://projectapi.gerasim.in/api/EmployeeManagement/";


  getAllProject(): Observable<IProject[]> {
    return this.https.get<IProject[]>(`${this.Api_URL}GetAllProjects`);
  }
  getProjectById(projectId: number): Observable<IProject> {
    return this.https.get<IProject>(`${this.Api_URL}GetProject/${projectId}`)
  }
  saveProject(obj: any): Observable<IProject> {
    return this.https.post<IProject>(`${this.Api_URL}CreateProject`, obj);
  }
  
  updateProject(obj:IProject):Observable<IProject>{
    return this.https.put<IProject>(`${this.Api_URL}UpdateProject/${obj.projectId}`,obj);
  }

  deleteProject(projectId:number):Observable<IProject>{
    return this.https.delete<IProject>(`${this.Api_URL}DeleteProject/${projectId}`);
  }
}
