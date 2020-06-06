import {Component, OnInit} from '@angular/core';
import {MainViewServiceService} from '../../services/main-view-service.service';
import {Tab} from '../../database/Tab';
import {AuthService} from '../../services/auth.service';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  tabs: Tab[];

  constructor(private mainViewService: MainViewServiceService, private authService: AuthService, private dataService: DataService) {
    this.tabs = this.mainViewService.getAllTabs();
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
