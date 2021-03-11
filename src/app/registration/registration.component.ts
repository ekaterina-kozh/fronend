import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiUser: UserService) { }

  formRegister = new FormGroup({
    email: new FormControl(null),
    username: new FormControl(null),
    password: new FormControl(null)
  });

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  registration() {
    console.log('Start....');
    const formData = this.formRegister.value;
    console.log(formData);
    this.createUser(formData.email, formData.username, formData.password);
  }

  createUser(Email, UserName, Password){
    this.apiUser.createUser(Email, UserName, Password).subscribe(
      data => {
        alert('Вы зарегистрированы');
        console.log('create');
      },
      error => {
        console.log(error);
      }
    );
  }
}
