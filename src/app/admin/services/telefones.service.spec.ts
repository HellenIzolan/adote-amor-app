import { TestBed } from '@angular/core/testing';

import { TelefonesService } from './telefones.service';

describe('TelefonesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelefonesService = TestBed.get(TelefonesService);
    expect(service).toBeTruthy();
  });
});
