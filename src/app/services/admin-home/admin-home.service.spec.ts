import {TestBed} from '@angular/core/testing';

import {AdminHomeService} from './admin-home.service';

describe('AdminHomeService', () => {
  let service: AdminHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
