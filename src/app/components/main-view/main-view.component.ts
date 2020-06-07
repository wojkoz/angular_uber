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

  constructor( private authService: AuthService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getAllCoursesByUser()
  }

  getAllCoursesByUser(){
    const login = this.authService.getLogin();
    this.dataService.getByUser(login).subscribe(value => {
      console.log('GetAllCourses', value);
    })
  }
}
