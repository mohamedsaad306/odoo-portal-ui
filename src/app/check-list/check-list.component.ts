
import { Component, OnInit, Input } from '@angular/core';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { HttpClient } from '@angular/common/http';
import { ProductsServiceService } from '../products-service.service';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css'],
  providers:[ProductsServiceService,HttpClient]
})
export class CheckListComponent implements OnInit {
  
  @Input()
  CheckListContentType: string;

  items: any[];


  constructor(private productsServiceService: ProductsServiceService) {
    this.productsServiceService.getLocations().subscribe(
      (data: any) => { console.log('sucess');console.log(data) }
    );
  }
  
  ngOnInit() {
    

    this.items = [
      { id: 1, text: this.CheckListContentType },
      { id: 2, text: "item 2 " },
      { id: 3, text: "item 3 " },
      { id: 4, text: "item 4  " },
      { id: 5, text: "item 5 " },
    ];
  }
}
