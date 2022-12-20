import { TestBed } from '@angular/core/testing';

import { MicrofoneService } from './microfone.service';

describe('MicrofoneService', () => {
  let service: MicrofoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrofoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
