import { TestBed } from '@angular/core/testing';

import { PemployeeService } from './pemployee.service';

describe('PemployeeService', () => {
  let service: PemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
