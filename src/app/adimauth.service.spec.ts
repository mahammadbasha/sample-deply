import { TestBed } from '@angular/core/testing';

import { AdimauthService } from './adimauth.service';

describe('AdimauthService', () => {
  let service: AdimauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdimauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
