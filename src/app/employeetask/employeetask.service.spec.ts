import { TestBed } from '@angular/core/testing';

import { EmployeetaskService } from './employeetask.service';

describe('EmployeetaskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeetaskService = TestBed.get(EmployeetaskService);
    expect(service).toBeTruthy();
  });
});
