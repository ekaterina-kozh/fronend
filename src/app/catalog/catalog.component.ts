import { Component, OnInit } from '@angular/core';
import {WorkersService} from '../services/workers.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

}
