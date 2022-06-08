export class loginInput{
    public Email:string='';
    public Password:string='';
}

export class loginIputUser{
    public property:string='';
    public Password:string='';
}

export class loginRes{
    public success: number = 0;
    public message:string = '';
    public token:string = '';
    public emailId:string = '';
}