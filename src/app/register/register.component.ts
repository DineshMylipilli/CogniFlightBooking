import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    UserName: new FormControl('',Validators.required),
    Email: new FormControl('',Validators.required),
    Password: new FormControl('',Validators.required),
    ContactNo: new FormControl(Validators.required),
    Gender: new FormControl('',Validators.required),
    Age: new FormControl(Validators.required),
    Address: new FormControl('',Validators.required),
  });

  constructor(private service:AuthServiceService,private router:Router){}

  ngOnInit(): void {
  }

  registerUser(data:any){
    this.service.RegisterUser(data).subscribe((res:any) => {console.log(res)  
        if(res.success == 1)
          alert(res.message+" as " + res.userData);
      },(error:HttpErrorResponse)=>{
        alert("Please enter proper details");
        this.router.navigate(['./register']);
      }
    );
  }
  
}
