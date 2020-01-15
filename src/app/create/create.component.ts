import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  posts:any;
constructor(private route:ActivatedRoute,
private router:Router,
private service:DataService) { }


ngOnInit() {
}


InsertBlog(){
console.log(this.posts);
let observableResult = this.service.InsertBlog(this.posts);
observableResult.subscribe((result)=>{
 console.log(result);
 this.router.navigate(['home']);
})

}

}
