import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {SignupComponent} from "../signup/signup.component";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private authService: AuthService, private router: Router, private dialog: MatDialog) { }

  openLoginDialog(){
    this.dialog.open(LoginComponent, {
      height: '400px',
      width: '460px',
    });
  }

  openSignUpDialog(){
    this.dialog.open(SignupComponent,{
      height: '600px',
      width: '640px',
    });
  }

  ngOnInit(): void {
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(value => {this.router.navigate(['/']).then(r => {location.reload()})});
  }
}
