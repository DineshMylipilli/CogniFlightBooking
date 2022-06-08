import { getLocaleDateFormat } from "@angular/common";

export class scheduleInput{
    public  FlightId: string = '';
    public  FlightName: string ='';
    public  FlightLogo : string ='';
    public  Source: string ='';
    public  Destination: string ='';
    public  StartTime: string ='';
    public  EndTime:  string ='';
    public  ScheduledDays: string='';
    public  Bcseats:Number=0.0;
    public  Nbcseats:Number=0.0;
    public  Price:Number=0.0;
    public  MealType:Number=0.0;
    public  RoundTrip:Number=0.0;
}

export class loginIputUser{
    public UserName:string='';
    public Password:string='';
}

export class loginRes{
    public success: number = 0;
    public message:string='';
    public token:string='';
}