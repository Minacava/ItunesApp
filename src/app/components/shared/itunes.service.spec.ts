import { TestBed, inject } from '@angular/core/testing';

import { PetitionsItunes } from './itunes.service';

describe('ItunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetitionsItunes]
    });
  });

  it('should be created', inject([PetitionsItunes], (service: PetitionsItunes) => {
    expect(service).toBeTruthy();
  }));
});
