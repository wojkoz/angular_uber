import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  //TODO: zabezpieczyc przed pustymi
  onSubmit() {
    if(this.formGroup.value.login !== '' && this.formGroup.value.password !== '') {
      this.authService.authenticate({
        login: this.formGroup.value.login,
        password: this.formGroup.value.password
      })
        .subscribe(value => {this.router.navigate(['/']);location.reload()})
    }else{
      document.getElementById('empty').style.display = 'block';
    }
    }
  }

