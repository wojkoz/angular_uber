import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  courses: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAll().subscribe(value => this.courses = value)
  }

}
