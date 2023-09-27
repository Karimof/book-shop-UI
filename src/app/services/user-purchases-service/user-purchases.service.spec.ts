import {TestBed} from '@angular/core/testing';

import {UserPurchasesService} from './user-purchases.service';

describe('UserPurchasesService', () => {
  let service: UserPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
