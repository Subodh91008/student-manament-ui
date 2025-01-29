import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterStudent } from '../page/registration/register-student';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 baseurl:string='http://localhost:8080';
  constructor(private http:HttpClient) { }

  registerStudent(student:RegisterStudent){
    return this.http.post(`${this.baseurl}/signup`,student);
  }

}
