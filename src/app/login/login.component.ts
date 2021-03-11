import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  });

  constructor(private apiUser: UserService) { }

  ngOnInit(): void {
  }


  // tslint:disable-next-line:typedef
  login() {
    console.log('Start login...');
    this.getToken(
      this.formLogin.value.username,
      this.formLogin.value.password
    );
  }

  // tslint:disable-next-line:typedef
  getToken(Username, Password){
    this.apiUser.getToken(Username, Password).subscribe(
      data => {
        alert('Вы успешно авторизировались');
        console.log(data);
        localStorage.setItem('my-token', data.auth_token);
      },
      error => {
        alert('Ошибка авторизации');
        console.log(error);
      }
    );
  }
}
