import {Component, OnInit, Output} from '@angular/core';
import {WorkersService} from '../../services/workers.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-show-cat',
  templateUrl: './show-cat.component.html',
  styleUrls: ['./show-cat.component.scss']
})
export class ShowCatComponent implements OnInit {

  categoryes = [];
  result = [];
  user: any = [];
  ModalTitle: string;
  ActivateAddEditCat: boolean = false;
  cat: any;
  wor: any;
  status = false;

  WorkersTest: boolean = false;

  constructor(private apiWorkers: WorkersService,
              private apiUser: UserService) {
  }

  ngOnInit(): void {
    this.getUserWithToken(localStorage.getItem('my-token'));

    if (this.user != null) {
      this.status = Boolean(this.user.is_staff);

    }

    this.getCategory();
  }

  getCategory = () => {
    this.apiWorkers.getCategory().subscribe(
      data => {
        this.categoryes = data;
        this.sortlist(this.categoryes);
      },
      error => {
        console.log(error);
      }
    );
  };

  sortlist = (data) => {
    function hierarchySortFunc(a, b) {
      return a.name > b.name;
    }

    function hierarhySort(hashArr, key, result) {

      if (hashArr[key] == undefined) {
        return;
      }
      var arr = hashArr[key].sort(hierarchySortFunc);
      for (var i = 0; i < arr.length; i++) {
        result.push(arr[i]);
        hierarhySort(hashArr, arr[i].id, result);
      }

      return result;
    }

    var hashArr = {};

    for (var i = 0; i < data.length; i++) {
      if (hashArr[data[i].parent_id] == undefined) {
        hashArr[data[i].parent_id] = [];
      }
      hashArr[data[i].parent_id].push(data[i]);
    }

    this.result = hierarhySort(hashArr, 0, []);

    this.addDepth(this.result);
  };

  addDepth = (data) => {
    let num2 = [];
    addDepth();


    function addDepth() {
      for (let item of data) {
        searchParent(item.id);
        item.depth = num2.length;
        num2.length = 0;
      }
    }

    function searchParent(Id) {
      let parent = 0;
      for (let item of data) {
        if (item.id == Id && item.parent_id != 0) {
          parent = item.parent_id;
          num2.push(parent);
          return searchParent(parent);
        }
      }
    }

  };

  // tslint:disable-next-line:typedef
  addClick(item, item2, item3) {
    this.cat = {
      id: item,
      parent_id: item2,
      name: '',
      result: item3,
      opt: 'add'
    };
    this.ModalTitle = 'Создание отделов';
    this.ActivateAddEditCat = true;
  }

  editClick(item, item2) {
    this.cat = item;
    this.cat.opt = 'edit';
    this.cat.result = item2;
    this.ModalTitle = 'Редактирование отделов';
    this.ActivateAddEditCat = true;
  }

  closeClick() {
    this.ActivateAddEditCat = false;
    this.getCategory();
  }

  deleteClick(item) {
    if (confirm('Вы уверены?')) {
      this.apiWorkers.delCatalog(item).subscribe(data => {
          alert('Запись удачно удалена');
          this.getCategory();
        },
        error => {
          console.log(error);
        });
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
