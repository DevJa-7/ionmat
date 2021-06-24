import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatePickerService {

  public startdate: Date;
  public enddate: Date;

  public newStartDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.startdate);
  public newEndDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(this.enddate);

  public starttimestamp: number;
  public endtimestamp: number;

  public newStartTimestamp: BehaviorSubject<number> = new BehaviorSubject<number>(this.starttimestamp);
  public newEndTimestamp: BehaviorSubject<number> = new BehaviorSubject<number>(this.endtimestamp);

  constructor() {}
}
