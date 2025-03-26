import { TestBed } from '@angular/core/testing';

import { ProductFormZustandService } from './product-form-zustand.service';

describe('ProductFormZustandService', () => {
  let service: ProductFormZustandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFormZustandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
