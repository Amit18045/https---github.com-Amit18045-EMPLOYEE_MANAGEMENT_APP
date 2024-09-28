import { Component, inject, OnInit, signal } from '@angular/core';
import { IProject, IProjectEmployee } from '../../model/interface/master';
import { PemployeeService } from '../../services/project-employee/pemployee.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ProjectService } from '../../services/project/project.service';
import { Employee } from '../../model/class/employee';
import { EmployeeserviceService } from '../../services/employeeservice.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-projectemployee',
  standalone: true,
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './projectemployee.component.html',
  styleUrl: './projectemployee.component.css'
})
export class ProjectemployeeComponent implements OnInit {

   projectEmployeeList = signal<IProjectEmployee[]>([]);
   projectEmpSrc = inject(PemployeeService);
   form: FormGroup = new FormGroup({});
    projectList$: Observable<IProject[]> = new Observable<IProject[]>;
    empList$:Observable<Employee []>=new Observable<Employee[]>;
    projectsrc=inject(ProjectService);
    empsrc=inject(EmployeeserviceService);

  constructor() {
    this.initializeForm();
    this.projectList$= this.projectsrc.getAllProject();
    this.empList$=this.empsrc.getAllEmployee();
  }


  ngOnInit(): void {
    this.getAllData();
  }

  initializeForm() {
    this.form = new FormGroup({
      empProjectId: new FormControl(0),
      projectId: new FormControl(0),
      empId: new FormControl(0),
      assignedDate: new FormControl(''),
      role: new FormControl(''),
      isActive: new FormControl(false),
    })
  }
  getAllData() {
    this.projectEmpSrc.getProjectEmp().subscribe((res: IProjectEmployee[]) => {
      this.projectEmployeeList.set(res);
    })
  }
  onSaveProjectEmployee(){
    this.projectEmpSrc.saveProjectEmp(this.form.value).subscribe((res:IProjectEmployee)=>{
      alert("Project Emp Created");
      this.getAllData();
      this.form.reset();
    })
  }

  onEdit(data: any){
this.form=data;
  }
}
