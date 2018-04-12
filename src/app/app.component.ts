import { Component } from '@angular/core';
import { ProductsServiceService } from './products-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductsServiceService,HttpClientModule]
})
export class AppComponent {
  title = 'app';
  categoriesName = 'Categories';
  locationsName = 'Locations';
}
