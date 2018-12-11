import { TestBed, inject } from '@angular/core/testing';

import { TaskserviceService } from '../services/api.service';

describe('TaskserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskserviceService]
    });
  });

  it('should be created', inject([TaskserviceService], (service: TaskserviceService) => {
    expect(service).toBeTruthy();
  }));
});
