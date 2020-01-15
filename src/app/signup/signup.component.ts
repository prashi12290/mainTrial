import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user:any;
constructor(private route:ActivatedRoute,
private router:Router,
private service:DataService) { }


ngOnInit() {
}


InsertUser(){
console.log(this.user);
let observableResult = this.service.InsertUser(this.user);
observableResult.subscribe((result)=>{
 console.log(result);
 this.router.navigate(['home']);
})

}

}
