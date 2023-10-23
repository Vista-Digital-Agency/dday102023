import { TestBed } from '@angular/core/testing';

import { MemorialSearchService } from './memorial-search.service';

describe('MemorialSearchService', () => {
  let service: MemorialSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemorialSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
