import { Component, OnInit } from '@angular/core';
import { RegisterStudent } from '../register-student';
import { FormsModule } from '@angular/forms';
import { RegisterService } from '../../../service/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent implements OnInit {
 student:RegisterStudent={firstName:'',lastName:'',email:'',password:'',phone:'',address:''};

 constructor(private service:RegisterService, private router:Router){}
  ngOnInit(): void {
    localStorage.clear();
  }
 register(student:RegisterStudent){
   this.service.registerStudent(student).subscribe({
    next:(result:any)=>{
      console.log("student register succfuly");
      alert("register successfully");
     this.router.navigateByUrl('login');
    },error:(error)=>{
      localStorage.clear()
      alert("something went wrong")
      console.log(error)
    }
   })
 }
}
