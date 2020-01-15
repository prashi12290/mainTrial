import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userdetails={
    uname:"",
    password:""
  };
  user:any;
 constructor(private service:AuthService,private router:Router)
  { }
  message;
  SignIn(){
   console.log(this.userdetails);
    //let isvalid = this.service.Login(this.userdetails);
     this.service.Login(this.userdetails).subscribe((result)=>{
       this.user=result;
       console.log("user "+this.user);
     })
     if(this.user==undefined){
            //this.router.navigate(['login']);
            this.message="user name/pass is invalid";
      }
      else {
        sessionStorage.setItem("user",this.user);
        this.router.navigate(['home']);
        
        
      }
  }
  ngOnInit() {
  }
}
