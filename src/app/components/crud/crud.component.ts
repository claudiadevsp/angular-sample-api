import { Images } from './../../models/placeholder.model';
import { CrudService } from './../../services/crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  error: any;
  images: any;

  constructor(private crudService: CrudService) {
    this.getter();
  }

  ngOnInit() {}

  getter() {
    this.crudService.getPictures().subscribe((data: Images) => {
      this.images = data;
      console.log('data recebido', data);
      console.log(this.images);
    }, (error: any) => {
      this.error = error;
      console.error('ERROR', error);
    }
   );
  }
}
