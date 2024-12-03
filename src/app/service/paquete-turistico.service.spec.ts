import { TestBed } from '@angular/core/testing';

import { PaqueteTuristicoService } from './paquete-turistico.service';

describe('PaqueteTuristicoService', () => {
  let service: PaqueteTuristicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaqueteTuristicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
