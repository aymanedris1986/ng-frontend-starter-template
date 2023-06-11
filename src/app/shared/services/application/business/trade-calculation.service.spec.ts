import { TestBed } from '@angular/core/testing';

import { TradeCalculationService } from './trade-calculation.service';

describe('TradeCalculationService', () => {
  let service: TradeCalculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeCalculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
