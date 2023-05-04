import { TestBed } from '@angular/core/testing';

import { MalParserService } from './mal-parser.service';

describe('MalParserService', () => {
  let service: MalParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MalParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
