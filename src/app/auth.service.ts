import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate
{
  canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot) 
  {
    if(this.IsloggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;  
    }
    
  }

  IsloggedIn(){
    if(window.sessionStorage.getItem('active') != null
    &&
    window.sessionStorage.getItem('active') == "1"){
            return true;
    }
    else{
           return false;
    }
  }

  constructor(private router:Router,private helper:HttpClient) 
  {  }

Login(userdetails){
     return this.helper.get("http://localhost:7070/app/user/login"+userdetails.uname+"/"+userdetails.password)
     
  
 
}

Logout(){
  window.sessionStorage.setItem('active',"0");
}


}