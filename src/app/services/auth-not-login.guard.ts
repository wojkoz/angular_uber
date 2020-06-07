import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthNotLoginGuard implements CanActivate {
  constructor(private router: Router,private authService: AuthService) {
  }

  selectedCourse = false;

  canActivate(){
    if(this.authService.isLoggedIn() && this.selectedCourse){
      return true;
    }else{
      this.router.navigate(['']);
    }
  }
}
