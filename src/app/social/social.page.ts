import { Component } from '@angular/core';
import { Router } from  "@angular/router";

@Component({
  selector: 'app-social',
  templateUrl: 'social.page.html',
  styleUrls: ['social.page.scss']
})
export class SocialPage {
  social:string ;
  bSearchFriend : any;
  textInput:any;
  slideOpts = {
    effect: 'flip'
  };
  constructor(public  router:  Router){
    this.social = 'home' ;
  }
  goUserPage(){
    this.router.navigateByUrl('currentuser');
  } 
  goPostPage(){
    this.textInput.nativeElement.blur();

    this.router.navigateByUrl('post');
  }
  segmentChanged(ev: any) {
    this.bSearchFriend = false;
    if(ev.detail.value == "friends")
      this.bSearchFriend = true;
    if(ev.detail.value == "search")
      this.bSearchFriend = true;
    
  }
  godetailPage(){
    this.router.navigateByUrl('detailpost');
  }
}
