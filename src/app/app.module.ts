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
    MainViewItemDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
