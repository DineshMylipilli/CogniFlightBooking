import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent implements OnInit {

  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  CancelForm = new FormGroup({
    pnr: new FormControl('',Validators.required),
  });

  cancelTicket(data:any){
    console.log(data);
    this.service.cancelTicket(data).subscribe((res:any) =>{console.log(res)
        if(res.success == 1){
          alert(res.pnr + ' with ' + res.message);
          this.router.navigate(['./history']);
        }
        else if(res.success == 0){
          alert(res.message);
        }
      }
      ,(error:HttpErrorResponse)=>{
        console.log(error);
        alert("Please Login to continue");
        this.service.Logout();
      }
    );

  }
}
