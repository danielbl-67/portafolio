import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProjectService } from './projects.service';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjectService],
    }).compileComponents();

    service = TestBed.inject(ProjectService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });
});
