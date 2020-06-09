import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  respond: any;

  formGroup = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatedPassword: new FormControl(''),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.formGroup.value.password === this.formGroup.value.repeatedPassword && this.formGroup.value.login !== '' && this.formGroup.value.email !== ''){
      this.authService.createOrUpdate({
        name: this.formGroup.value.login,
        email: this.formGroup.value.email,
        password: this.formGroup.value.password,
      }).subscribe((value => {
        this.respond = value;
        if(this.respond.error !==undefined ){
          document.getElementById('info').innerHTML = 'Taki użytkownik już istnieje';
          document.getElementById('info').style.display = 'block';
        }else{
          document.getElementById('info').style.display = 'block';
          document.getElementById('info').innerHTML = 'Pomyślnie zarejestrowano';
          document.getElementById('info').style.color = 'green';
          setTimeout(() => {
            location.reload();
          }, 2000);
        }
      }))
    }else{
      document.getElementById('info').innerHTML = 'Puste pole';
      document.getElementById('info').style.display = 'block';
    }

  }
}
