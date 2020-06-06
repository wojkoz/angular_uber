import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(value => {this.router.navigate(['/']).then(r => {})});
  }
}
