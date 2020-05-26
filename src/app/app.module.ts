import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {LoginComponent} from './components/login/login.component';
import {MainViewComponent} from './components/main-view/main-view.component';
import {MainViewItemComponent} from './components/main-view-item/main-view-item.component';
import {MainViewItemTextComponent} from './components/main-view-item-text/main-view-item-text.component';
import {MainViewItemImageComponent} from './components/main-view-item-image/main-view-item-image.component';
import {MainViewItemDescriptionComponent} from './components/main-view-item-description/main-view-item-description.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {FooterComponent} from './components/footer/footer.component';
import {MainViewItemDescriptionCalculateRoadComponent} from './components/main-view-item-description-calculate-road/main-view-item-description-calculate-road.component';
import {AgmCoreModule} from '@agm/core'
import {environment} from '../environments/environment';
import { MapComponent } from './components/map/map.component';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    MainViewComponent,
    MainViewItemComponent,
    MainViewItemTextComponent,
    MainViewItemImageComponent,
    MainViewItemDescriptionComponent,
    FooterComponent,
    MainViewItemDescriptionCalculateRoadComponent,
    MapComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AgmCoreModule.forRoot({
      apiKey: environment.apiKey,
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
