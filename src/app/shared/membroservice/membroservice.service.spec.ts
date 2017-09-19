import { TestBed, inject } from '@angular/core/testing';

import { MembroserviceService } from './membroservice.service';

describe('MembroserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MembroserviceService]
    });
  });

  it('should be created', inject([MembroserviceService], (service: MembroserviceService) => {
    expect(service).toBeTruthy();
  }));
});
