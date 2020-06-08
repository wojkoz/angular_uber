import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CourseComponent} from "./components/course/course.component";
import {AuthNotLoginGuard} from "./services/auth-not-login.guard";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
    canActivate: [AuthNotLoginGuard],
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
