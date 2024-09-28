import { Component, inject, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dahboard/dashboard.service';
import { IApiResponse } from '../../model/interface/master';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

dashboardSrc=inject(DashboardService);
dashboardDataList: any={};

ngOnInit(): void {
  this.getDashboardData();
}
getDashboardData(){
  debugger
  this.dashboardSrc.getAllDashboard().subscribe((res:any)=>{
this.dashboardDataList=res;
console.log(res);
  })
}

}
