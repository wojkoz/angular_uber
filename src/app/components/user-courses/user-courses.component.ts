import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  courses: any;

  constructor(private dataService: DataService, private authService: AuthService) { }

  ngOnInit(): void {
    const login = this.authService.getLogin();

    this.dataService.getByUser(login).subscribe(value => this.courses = value)
  }

}
