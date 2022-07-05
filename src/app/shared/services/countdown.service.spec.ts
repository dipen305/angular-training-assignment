/* tslint:disable:no-unused-variable */

import { DatePipe } from '@angular/common';
import { TestBed, async, inject } from '@angular/core/testing';
import { CountdownService } from './countdown.service';

describe('Service: Countdown', () => {
  let countDownService:CountdownService;
  let datePipe: jasmine.SpyObj<DatePipe>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatePipe]
    });
    datePipe = jasmine.createSpyObj('DatePipe', ['transform']);
    countDownService = new CountdownService(datePipe)
  });

  it('should ...', inject([CountdownService], (service: CountdownService) => {
    expect(service).toBeTruthy();
  }));

  it("timerHandler() should start the timer ", () => {
    countDownService.timerHandler(100,null);
   expect(countDownService.currentTimer).toEqual(100);
  });

  it("timerHandler() should set error message if no value entered ", () => {
    countDownService.timerHandler(null,null);
   expect(countDownService.errorMessage).toEqual('Please enter timer limit');
  });

  it("timerHandler() should reset the timer ", () => {
    countDownService.timerHandler(100,10);
   expect(countDownService.pauseCount).toEqual(0);
  });

  it("reset() should reset the timer ", () => {
    countDownService.reset();
   expect(countDownService.currentTimer).toEqual(0);
  });
});
