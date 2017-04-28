/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogService } from './log.service';

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogService]
    });
  });

  it('should ...', inject([LogService], (service: LogService) => {
    expect(service).toBeTruthy();
  }));
});
