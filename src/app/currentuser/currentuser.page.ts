import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-currentuser',
  templateUrl: './currentuser.page.html',
  styleUrls: ['./currentuser.page.scss'],
})
export class CurrentuserPage implements OnInit {

  constructor(public  router:  Router) { }
  
  goMessagePage(){
    this.router.navigateByUrl('message');
  } 
  ngOnInit() {
  }

}
