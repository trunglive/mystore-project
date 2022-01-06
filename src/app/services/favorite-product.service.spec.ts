import { TestBed } from '@angular/core/testing';

import { FavoriteProductService } from './favorite-product.service';

describe('FavoriteProductService', () => {
  let service: FavoriteProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
