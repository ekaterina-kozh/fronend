import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  user: any = [];

  status;

  constructor(private apiUser: UserService) {
  }

  ngOnInit(): void {
    this.getUserWithToken(localStorage.getItem('my-token'));

    if (this.user != null) {
      this.status = Boolean(this.user.is_staff);
    }
  }

  getUserWithToken(MyToken) {
    this.apiUser.getUserWithToken(MyToken).subscribe(
      data => {
        //console.log(data);
        this.user = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
