import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';
import {faCar, faDollarSign, faRoute} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  faCar = faCar;
  faDollarSign = faDollarSign;
  faRoute = faRoute;
  login: String;

  constructor( private authService: AuthService, private dataService: DataService) {
  }
  ngOnInit(): void {
    this.getAllCoursesByUser()
    this.isLoggedIn();
  }

  getAllCoursesByUser(){
    this.login = this.authService.getLogin();
    this.dataService.getByUser(this.login).subscribe(value => {
    })
  }
  shouldShowLogin(): boolean{
    return this.authService.isLoggedIn();
  }

  isLoggedIn(){
    if(!this.authService.isLoggedIn()){
      document.getElementById('userLoggedDiv').style.display = 'none';
    }else {
      document.getElementById('userNotLoggedDiv').style.display = 'none';
    }
  }
}
