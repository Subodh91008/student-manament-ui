import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser } from '../login/login-user';
import { Student } from '../component/student';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseurl="http://localhost:8080";

  constructor(private http:HttpClient) { }

userLogin(loginUser:LoginUser){
  return this.http.post(`${this.baseurl}/login`,loginUser);
}
getmessage(){
 return this.http.get<string>(`${this.baseurl}/api/hello`,{ responseType: 'text' as 'json' });
}
getAllStudent(){
  return this.http.get<Student[]>(`${this.baseurl}/api/allstudent`);
}
}
