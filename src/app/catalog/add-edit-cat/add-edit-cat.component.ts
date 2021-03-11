import {Component, Input, OnInit} from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-add-edit-cat',
  templateUrl: './add-edit-cat.component.html',
  styleUrls: ['./add-edit-cat.component.css']
})
export class AddEditCatComponent implements OnInit {


  constructor(private apiWorkers: WorkersService) {
  }

  @Input() cat: any;
  id: string;
  parent_id: string;
  name: string;
  result;
  opt: string;



  ngOnInit(): void {
    this.id = this.cat.id;
    this.parent_id = this.cat.parent_id;
    this.name = this.cat.name;
    this.result = this.cat.result;
    this.opt = this.cat.opt;
  }

  addCat() {
    this.apiWorkers.createCatalog(this.cat.id, this.cat.name).subscribe(
      data => {
        alert('Запись удачно создана');
      },
      error => {
        console.log(error);
      }
    );
  }

  updateCat() {
    this.apiWorkers.putCatalog(this.cat.id, this.cat.parent_id, this.cat.name).subscribe(res => {
      alert('Запись удачно изменена');
    }, error => {
      console.log(error);
    });
  }


}
