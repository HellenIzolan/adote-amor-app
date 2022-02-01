import { TestBed } from '@angular/core/testing';

import { AdocoesService } from './adocoes.service';

describe('AdocoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdocoesService = TestBed.get(AdocoesService);
    expect(service).toBeTruthy();
  });
});
