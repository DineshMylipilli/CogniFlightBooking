import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-booking-history',
  templateUrl: './booking-history.component.html',
  styleUrls: ['./booking-history.component.css']
})
export class BookingHistoryComponent implements OnInit {

  ticketHistory:any = [];
  constructor(private service:AuthServiceService) { }

  ngOnInit(): void {
    this.bookingHistory(localStorage.getItem('email'));
  }

  bookingHistory(data:any){
    this.service.ticketHistory(data).subscribe((res:any) => {console.log(res)
        this.ticketHistory=res;
        
      },(error:HttpErrorResponse)=>{
        alert("Please Login to continue");
        this.service.Logout();
      }
    );
  }
}
