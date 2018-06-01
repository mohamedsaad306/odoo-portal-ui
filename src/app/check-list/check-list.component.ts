
import { Component, OnInit, Input } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { HttpClient } from '@angular/common/http';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
  providers: [ProductsServiceService, HttpClient]
})
export class CheckListComponent implements OnInit {

  setItemsInterval: any;

  @Input()
  CheckListTitle: string;

  @Input()
  idx: string;

  @Input()
  CheckListContentType: string;

  @Input()
  inputItems: string;

  items: any[];

  constructor(private productsServiceService: ProductsServiceService) {
  }
  
  setItems() {
    console.log(this.inputItems);
    if (this.inputItems) {
      this.items = JSON.parse(this.inputItems);
      clearInterval(this.setItemsInterval);
    }else{
      setTimeout(() => {
        this.setItems()
      }, 500);
    }
  }
  ngOnInit() {
    console.log(this.items)
    this.setItems();
    //this.setItemsInterval = setInterval(this.setItems, 2000);
  }
}
