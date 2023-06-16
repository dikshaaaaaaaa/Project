import { TestBed } from '@angular/core/testing';

import { LoginsrviceService } from './loginsrvice.service';

describe('LoginsrviceService', () => {
  let service: LoginsrviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginsrviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
