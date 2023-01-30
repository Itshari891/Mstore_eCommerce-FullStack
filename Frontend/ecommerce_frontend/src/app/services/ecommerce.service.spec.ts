import { TestBed } from '@angular/core/testing';

import { EcommerceService } from './ecommerce.service';

describe('EcommerceService', () => {
  let service: EcommerceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
