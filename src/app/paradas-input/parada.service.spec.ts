import { TestBed, inject } from '@angular/core/testing';

import { ParadaService } from './parada.service';

describe('ParadaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParadaService]
    });
  });

  it('should ...', inject([ParadaService], (service: ParadaService) => {
    expect(service).toBeTruthy();
  }));
});
