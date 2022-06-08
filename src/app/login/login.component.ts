import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
import { catchError } from 'rxjs';
import { loginRes } from '../models/loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Title:string = "Login";
  IsUser:string = "user";

  userForm = new FormGroup({
    Email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private service:AuthServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  SignIn(data:any, role:string){
    if(role == "admin")
    {
      this.service.loginAdmin(data).subscribe((res:loginRes) => {console.log(res)  
          if(res.success == 1){
            alert(res.message + ' with ' + data.Email);
            localStorage.setItem('token',res.token);
            localStorage.setItem('role',role);
            //localStorage.setItem('email',res.emailId);
            this.router.navigate(['./'+localStorage.getItem('role')]);
          }
        },(error:HttpErrorResponse)=>{
          alert("Please check your Credentials");
          this.router.navigate(['./login']);
        }
      );
    }
    else if(role=="user")
    {
      this.service.loginUser(data).subscribe((res:loginRes) => {console.log(res)
          if(res.success == 1){
            alert(res.message + ' with ' +res.emailId);
            localStorage.setItem('token',res.token);
            localStorage.setItem('role',role);
            localStorage.setItem('email',res.emailId);
            this.router.navigate(['./'+localStorage.getItem('role')]);
          }
        },(error:HttpErrorResponse)=>{
          alert("Please check your Credentials");
          this.router.navigate(['./login']);
        }
      );
    }
  }

  handleError(error:any){
    return this.router.navigate(['./user']);
  }

}
