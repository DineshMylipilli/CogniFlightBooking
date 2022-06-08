import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseURL, environment } from 'src/environments/environment';
import { loginInput, loginRes } from '../models/loginModel';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //public APIGatewayURL = "http://localhost:8000/api/";

  public loginAdminURL = baseURL + "Login/AdminLogin";
  public loginUserURL = baseURL + "LoginUser/UserLogin";
  public registerUserURL = baseURL + "Registration/RegisterUser";
  public scheduleflightURL = baseURL + "Schedule/ScheduleFlight";
  public blockFlightURL = baseURL + "AddBlock/BlockFlight?Airline_ID=";
  public addFlightURL = baseURL + "AddBlock/AddFlight";
  public cancelTicketURL = baseURL + "Bookings/CancelTicket?pnr=";
  public ticketBookingURL = baseURL + "Bookings/FlightTicketBooking";
  public flightSearchURL = baseURL + "Bookings/GetFlightsBySearch";
  public bookingHistoryURL = baseURL + "Bookings/SearchTicket?emailId=";
  
  constructor(private http:HttpClient, private router: Router) { }

  //Login as Admin
  loginAdmin(data:any):Observable<loginRes>{
    const headers = {'content-type':'application/json'}
    var inputObj = new loginInput(); 
    inputObj.Email = data.Email;
    inputObj.Password = data.password;
    return this.http.post<loginRes>(this.loginAdminURL,JSON.stringify(inputObj),{'headers':headers});
  }

  //Login as User
  loginUser(data:any):Observable<loginRes>{
    const headers = {'content-type':'application/json'}
    var inputObj = new loginInput(); 
    inputObj.Email = data.Email;
    inputObj.Password = data.password;
    return this.http.post<loginRes>(this.loginUserURL,JSON.stringify(inputObj),{'headers':headers});
  }

  //Register User
  RegisterUser(data:any):Observable<any>{
    const headers = new HttpHeaders({'content-type': 'application/json'});
    return this.http.post(this.registerUserURL,data,{headers:headers});
  }

  //Schedule flight
  AddSchedule(data:any):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.post(this.scheduleflightURL,data, {headers:headers});
  }

  //Add Flight
  AddFlight(data:any):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.post(this.addFlightURL,data,{headers:headers});
  }

  //Block flight
  BlockFlight(airlineId:String):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.delete(this.blockFlightURL + airlineId,{headers:headers});
  }

  //Book ticket
  BookTicket(data:any):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.post(this.ticketBookingURL,data,{headers:headers});
  }

  //Cancel ticket
  cancelTicket(data:any):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.put(this.cancelTicketURL,JSON.stringify(data),{headers:headers});
  }

  //Booking History
  ticketHistory(emailId:string):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    var getURL = this.bookingHistoryURL + emailId;
    return this.http.get(getURL,{headers:headers});
  }

  //Flight searching
  searchFlight(data:any):Observable<any>{
    var jwtToken = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: `Bearer ${jwtToken}`
    });
    return this.http.post(this.flightSearchURL,data,{headers:headers});
  }

  //Logs out user or admin
  Logout(){
    localStorage.clear();
    this.router.navigate(['./login']);
  }
}
