import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../registration/login.service';
import { Student } from '../student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  message:string='';
  students:Student[]=[];

  constructor(private service:LoginService,private router:Router){}
 
  ngOnInit(): void {
    this.getallStudent();
  }
  getallStudent(){
    this.service.getAllStudent().subscribe({
      next: (result) => {
        this.students = result;
      },
      error: (err) => {
        console.error('Error fetching students:', err);
      },
      complete: () => {
        console.log('Student data fetch complete');
      },
    });
}

editstudent(sid:number){
  this.router.navigateByUrl(`/edit/${sid}`);
  alert(sid);
}
deleteStudent(id:number){
  alert(id);
  
}

addStudent(){
  this.router.navigateByUrl("createstudent");
}


}
