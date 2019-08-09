import { TestBed } from '@angular/core/testing';

import { LoraService } from './lora.service';

describe('LoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoraService = TestBed.get(LoraService);
    expect(service).toBeTruthy();
  });
});
