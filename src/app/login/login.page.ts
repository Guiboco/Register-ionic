import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService } from '../service/auth.service';
import { User} from '../shared/user.class';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
user: User = new User();
  constructor(
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit() {
  }

async onLogin(){
    const user = await this.authService.onLogin( this.user);
    if (user) {
      console.log('succesfully logged in!');
      this.router.navigateByUrl('/');
    }
  }
}
