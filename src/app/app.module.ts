import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {MainViewComponent} from './components/main-view/main-view.component';
import {MainViewItemTextComponent} from './components/main-view-item-text/main-view-item-text.component';
import {MainViewItemImageComponent} from './components/main-view-item-image/main-view-item-image.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './components/footer/footer.component';
import {MainViewItemDescriptionCalculateRoadComponent} from './components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component';
import {AgmCoreModule} from '@agm/core';
import {environment} from '../environments/environment';
import {MapComponent} from './components/map/map.component';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DirectionsMapDirective} from './directives/directions-map.directive';
import {MapViewComponent} from './components/map-view/map-view.component';
import {AgmDirectionModule} from 'agm-direction';
import {MatCardModule} from '@angular/material/card';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CourseComponent} from './components/course/course.component';
import {LinksBarComponent} from './components/links-bar/links-bar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthInterceptor} from './services/auth.interceptor';
import { UserCoursesComponent } from './components/user-courses/user-courses.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MainViewComponent,
    MainViewItemTextComponent,
    MainViewItemImageComponent,
    FooterComponent,
    MainViewItemDescriptionCalculateRoadComponent,
    MapComponent,
    DirectionsMapDirective,
    MapViewComponent,
    CourseComponent,
    LinksBarComponent,
    UserCoursesComponent,

  ],
  entryComponents: [LoginComponent, SignupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places', 'directions']
    }),
    AgmDirectionModule,
    MatGoogleMapsAutocompleteModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
