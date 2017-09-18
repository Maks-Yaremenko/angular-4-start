import { TestBed, inject } from '@angular/core/testing';

import { HeroSeviceService } from './hero.service';

describe('HeroSeviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroSeviceService]
    });
  });

  it('should be created', inject([HeroSeviceService], (service: HeroSeviceService) => {
    expect(service).toBeTruthy();
  }));
});
