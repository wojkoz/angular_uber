import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  respond: any;

  formGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    if(this.formGroup.value.login !== '' && this.formGroup.value.password !== '') {
      this.authService.authenticate({
        login: this.formGroup.value.login,
        password: this.formGroup.value.password
      })
        .subscribe(value => {
          this.respond = value;
          if(this.respond){
            location.reload();
          }else{
            document.getElementById('info').style.display = 'block';
            document.getElementById('info').innerHTML = 'Złe hasło lub login';
          }
        })
    }else{
      document.getElementById('info').style.display = 'block';
    }
    }
  }

