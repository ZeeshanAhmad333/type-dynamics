import { TestBed } from '@angular/core/testing';

import { ProjectileService } from './projectile.service';

describe('ProjectileService', () => {
  let service: ProjectileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
