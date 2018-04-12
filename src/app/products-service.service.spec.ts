import { TestBed, inject } from '@angular/core/testing';

import { ProductsServiceService } from './products-service.service';

describe('ProductsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductsServiceService]
    });
  });

  it('should be created', inject([ProductsServiceService], (service: ProductsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
