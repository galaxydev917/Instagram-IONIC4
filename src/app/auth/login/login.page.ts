import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../../api/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, public  router:  Router) { }

  ngOnInit() {
  }

  login(){
     // this.authService.login(form.value).subscribe((res)=>{
      this.router.navigateByUrl('');
    //});
  }
}
