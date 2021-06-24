import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { MatAutocompleteTrigger } from '@angular/material';

import { DatePickerService } from '../datepicker.service';

import { getTime, addMinutes, subMinutes } from 'date-fns';

@Component({
  selector: 'app-timeautocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class TimeautocompleteComponent implements OnInit {

  public times = [
    [1, '00:00'],
    [2, '00:30'],
    [3, '01:00'],
    [4, '01:30'],
    [5, '02:00'],
    [6, '02:30'],
    [7, '03:00'],
    [8, '03:30'],
    [9, '04:00'],
    [10, '04:30'],
    [11, '05:00'],
    [12, '05:30'],
    [13, '06:00'],
    [14, '06:30'],
    [15, '07:00'],
    [16, '07:30'],
    [17, '08:00'],
    [18, '08:30'],
    [19, '09:00'],
    [20, '09:30'],
    [21, '10:00'],
    [22, '10:30'],
    [23, '11:00'],
    [24, '11:30'],
    [25, '12:00'],
    [26, '12:30'],
    [27, '13:00'],
    [28, '13:30'],
    [29, '14:00'],
    [30, '14:30'],
    [31, '15:00'],
    [32, '15:30'],
    [33, '16:00'],
    [34, '16:30'],
    [35, '17:00'],
    [36, '17:30'],
    [37, '18:00'],
    [38, '18:30'],
    [39, '19:00'],
    [40, '19:30'],
    [41, '20:00'],
    [42, '20:30'],
    [43, '21:00'],
    [44, '21:30'],
    [45, '22:00'],
    [46, '22:30'],
    [47, '23:00'],
    [48, '23:30']
];
  @Input() control: string;

  @Output() timeSelected = new EventEmitter<any>();

  @Output() opened = new EventEmitter<any>();

  @Output() closed = new EventEmitter<any>();

  @ViewChild('optionAutoCompleteInput', { read: MatAutocompleteTrigger, static: false })

  optionAutoCompleteInput: MatAutocompleteTrigger;

  public startTimestamp: number;
  public endTimestamp: number;

  public from: Date;
  public to: Date;

  constructor(public dtservice: DatePickerService) {}

  ngOnInit() {

    console.log('autcomplete fired');

    this.dtservice.newStartDate.subscribe(startdate => {
      this.startTimestamp = getTime(new Date(startdate));
      this.from = startdate;
      if (this.control === 'eventStartDate') {
        this.check();
      }
    });

    this.dtservice.newEndDate.subscribe(enddate => {
      this.endTimestamp = getTime(new Date(enddate));
      this.to = enddate;
      if (this.control === 'eventEndDate') {
        this.check();
      }
    });
  }

  check() {

    console.log('autcomplete check fired');

    if ((this.startTimestamp >= this.endTimestamp)) {

      if (this.control === 'eventStartDate') {
      this.dtservice.newEndDate.next(addMinutes(new Date(this.from), 30));
      }

      if (this.control === 'eventEndDate') {
      this.dtservice.newStartDate.next(subMinutes(new Date(this.to), 30));
      }
    }

  }

  optionSelected(event) {
    this.timeSelected.emit(event.option.value);
  }

  open() {
    this.optionAutoCompleteInput.openPanel();
  }

  autoopened() {
    this.opened.emit();
  }

  autoclosed() {
    this.closed.emit();
  }
}
