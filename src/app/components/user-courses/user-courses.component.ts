import { Component, OnInit, Input } from '@angular/core';
import {Course, DataService} from '../../services/data.service';

@Component({
  selector: 'app-user-courses',
  templateUrl: './user-courses.component.html',
  styleUrls: ['./user-courses.component.css']
})
export class UserCoursesComponent implements OnInit {
  courses: Course[];
  @Input() user: String;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.user)
    if(this.user == undefined){
      this.dataService.getAll().subscribe(value => this.setCourses(value, 10))
    }else{
      this.dataService.getByUser(this.user).subscribe(value => this.setCourses(value, 5))
    }

  }

  setCourses(value: any, max: number): void{
    this.courses = value
    this.courses = this.courses.reverse();

    const isMoreThan20 = this.courses.length - max > 0;

    if(isMoreThan20){
      for(let i=0; this.courses.length != max; i++){
        this.courses.pop();
      }
    }

  }

}
