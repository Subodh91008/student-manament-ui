import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginUser } from '../login-user';
import { LoginService } from '../../registration/login.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
   loginObj: LoginUser = {
    email: '',
    password: ''
  };
  

constructor(private router:Router,private loginservice:LoginService){}
  ngOnInit(): void {
    localStorage.clear()
  }

 

onlogin(loginUser:LoginUser){
  
  this.loginservice.userLogin(loginUser).subscribe({
    
    next:(result:any)=>{
    
       console.log(result.jwt)
      localStorage.setItem("token",result.jwt);
      console.log(localStorage.getItem);
      this.router.navigateByUrl('dashboard');
    },error:(error)=>{
      localStorage.removeItem('token')
      alert("something went wrong!!!! check username or password");
      console.log("error while login",error);
    },complete:()=>{
      console.log("succesfully login");
    }
  })
}
registrationpage(){
  this.router.navigateByUrl('registration');
}
}
