import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { AngularFireAuth} from '@angular/fire/auth';
import { AuthService} from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth
  ) {}
  onLogout(){
    console.log('LogOut!');
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login')
    
  }
}
