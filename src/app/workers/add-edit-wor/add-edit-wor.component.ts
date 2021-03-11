import {Component, Input, OnInit} from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {$} from 'protractor';

@Component({
  selector: 'app-add-edit-wor',
  templateUrl: './add-edit-wor.component.html',
  styleUrls: ['./add-edit-wor.component.css']
})
export class AddEditWorComponent implements OnInit {

  constructor(private apiWorkers: WorkersService) {
  }

  @Input() worker: any;
  categ: any;
  id;
  it = 1;
  cat: any;
  selectedCategory: string;


  ngOnInit(): void {
    console.log(this.worker);
    this.id = this.worker.id;
    this.it = this.worker.category.id;
    this.cat = {
      id: 0,
      parent_id: 0,
      name: ''
    },
      this.getCategory();
  }

  getData = (item2) => {
    for (const item of this.categ) {
      if (item2 == item.id) {
        this.cat = item;
      }
    }
  };

  addWor() {

    this.getData(this.worker.category.id);
    //console.log(this.worker.name, this.worker.email, this.worker.phone, this.worker.position, this.cat);
    this.apiWorkers.createWorkers(this.worker.name, this.worker.email, this.worker.phone, this.worker.position, this.worker.category.id).subscribe(
      data => {
        alert('Запись удачно создана');
      },
      error => {
        console.log(error);
      }
    );
  }

  getCategory = () => {
    this.apiWorkers.getCategory().subscribe(
      data => {
        this.categ = data;
      },
      error => {
        console.log(error);
      }
    );
  };

  updateWor() {
    this.getData(this.worker.category.id);
    console.log(this.worker.id, this.worker.name, this.worker.email, this.worker.phone, this.worker.position, this.cat.id);
    this.apiWorkers.putWorkers(this.worker.id, this.worker.name, this.worker.email, this.worker.phone, this.worker.position, this.cat.id).subscribe(res => {
      alert('Запись удачно изменена');
    }, error => {
      console.log(error);
    });
  }


}
