import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { IProject } from '../../model/interface/master';
import { ProjectService } from '../../services/project/project.service';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent implements OnInit {

projectList:IProject []=[];
projectsrc=inject(ProjectService);
route=inject(Router);


ngOnInit(): void {
  this.getAllProject();
}
getAllProject(){
  this.projectsrc.getAllProject().subscribe((res:IProject [])=>{
    this.projectList=res;
  })
}

onEdit(projectId :number ){
this.route.navigate(['new-project',projectId]);
}
onDelete(projectId :number){
  const isDeleted=confirm("Are you want to delete this project");
  if(isDeleted){
    this.projectsrc.deleteProject(projectId).subscribe((res:IProject)=>{
      alert("Deleted project");
      this.getAllProject();
    })
  }

}

}
