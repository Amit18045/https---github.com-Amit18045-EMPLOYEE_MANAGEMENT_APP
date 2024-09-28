import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Employee } from '../../model/class/employee';
import { EmployeeserviceService } from '../../services/employeeservice.service';
import { AsyncPipe } from '@angular/common';
import { ProjectService } from '../../services/project/project.service';
import { IApiResponse, IProject } from '../../model/interface/master';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-form',
  standalone: true,
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './project-form.component.html',
  styleUrl: './project-form.component.css'
})
export class ProjectFormComponent {

  projectForm: FormGroup = new FormGroup({});
  empList$: Observable<Employee[]> = new Observable<Employee[]>
  employeeSrc = inject(EmployeeserviceService);
  projectsrc = inject(ProjectService);
  activetedRoute = inject(ActivatedRoute);

  constructor() {
    this.initializeForm();
    this.empList$ = this.employeeSrc.getAllEmployee();
    this.activetedRoute.params.subscribe((res: any) => {
      if (res.id != 0) {
      this.getProjectById(res.id);
      }
    })
  }

  initializeForm(data ? :IProject) {
    this.projectForm = new FormGroup({
      projectId: new FormControl(data ? data.projectId :0),
      projectName: new FormControl(data ? data.projectName :''),
      clientName: new FormControl(data ? data.clientName :''),
      startDate: new FormControl(data ? data.startDate :''),
      leadByEmpId:new FormControl(data ? data.leadByEmpId :0),
      contactPerson: new FormControl(data ? data.contactPerson :''),
      contactNo: new FormControl(data ? data.contactNo :''),
      emailId: new FormControl(data ? data.emailId :''),

    })
  }


getProjectById(projectId:number){
  this.projectsrc.getProjectById(projectId).subscribe((res:IProject)=>{
this.initializeForm(res);
  })
}

  onSaveProject() {
    this.projectsrc.saveProject(this.projectForm.value).subscribe((res: IProject) => {
      alert("Project Created");
      this.projectForm.reset();
    }, error => {
      alert("Api error");
    })
  }

  onUpdateProject(){
    this.projectsrc.updateProject(this.projectForm.value).subscribe((res: IProject) => {
      alert("Project update");
      this.projectForm.reset();
    }, error => {
      alert("Api error");
    })
  }
}
