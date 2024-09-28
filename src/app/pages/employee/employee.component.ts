import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeserviceService } from '../../services/employeeservice.service';
import { IApiResponse, IChildDept, IparentDept } from '../../model/interface/master';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../model/class/employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
  isFromVisiable = signal<boolean>(false);
  empService = inject(EmployeeserviceService);
  parentDeptList = signal<IparentDept[]>([]);
  childDeptList = signal<IChildDept[]>([]);
  employeeList = signal<Employee[]>([]);
  employeeObj: Employee = new Employee();
  parentDeptId: number = 0;

  ngOnInit(): void {
    this.getParentDept();
    this.getEmployee();
  }

  getParentDept() {
    this.empService.getAllDepart().subscribe((res: IApiResponse) => {
      this.parentDeptList.set(res.data);
    })
  }
  onParentDeptChange() {
    this.empService.getChildDeptById(this.parentDeptId).subscribe((res: IApiResponse) => {
      this.childDeptList.set(res.data);
    })
  }
  onSave() {
    debugger
    this.empService.saveEmployee(this.employeeObj).subscribe((res: IApiResponse) => {
      alert("Employee Created");
      this.getEmployee();
      this.employeeObj=new Employee();
      
    }, error => {
      alert("Api Error");
    }
    )
  }

  getEmployee() {
    this.empService.getAllEmployee().subscribe((res: Employee[]) => {
      this.employeeList.set(res);
    })
  }

  onEdit(emp: Employee) {
    this.employeeObj = emp;
    this.isFromVisiable.set(true);
  }

  onUpdate() {
    this.empService.updateEmployee(this.employeeObj).subscribe((res: IApiResponse) => {
      alert("Update Employee");
      this.getEmployee();
     this.employeeObj=new Employee();
    }, error => {
      alert("Api Error");
    })
  }


  onDelete(empId: number) {
    const isDeleted = confirm("Are you want to delete this employee");
    if (isDeleted) {
      this.empService.deleteEmployeeBYId(empId).subscribe((res: IApiResponse) => {
        alert("Delete Employee");
        this.getEmployee();
      }, error => {
        alert("Api Error");
      })
    }
  }
}
