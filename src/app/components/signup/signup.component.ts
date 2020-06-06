import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  formGroup = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatedPassword: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  //TODO: zabepzieczyć pola przed pustymi itp.
  onSubmit() {
    if(this.formGroup.value.password === this.formGroup.value.repeatedPassword){
      this.authService.createOrUpdate({
        name: this.formGroup.value.login,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      }).subscribe((value =>
        {
          this.router.navigate(['/login'])
        }

      ))
    }

  }
}
