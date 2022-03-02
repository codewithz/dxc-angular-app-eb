import { TestBed } from '@angular/core/testing';

import { ClonegitService } from './clonegit.service';

describe('ClonegitService', () => {
  let service: ClonegitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClonegitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
