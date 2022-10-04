import { TestBed } from '@angular/core/testing';

import { BoardManipulationService } from './board-manipulation.service';

describe('BoardManipulationService', () => {
  let service: BoardManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
