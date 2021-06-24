import { Component, Input, OnInit, OnChanges, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatAutocompleteTrigger } from '@angular/material';

import { TimeautocompleteComponent } from './autocomplete/autocomplete.component';

import { Platform } from '@ionic/angular';

import { DatePickerService } from './datepicker.service';

import { getTime, format, startOfToday, formatISO, parseISO } from 'date-fns';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})

export class DatepickerComponent implements OnInit, OnChanges {
  pickerOpen = false;

 // value: any;

  timestamp: Date;
  date: any;
  time: any;

  placeholder: string;

  from: any;
  to: any;

  pageoutput = '';
  ionPageOutput = '';

  isMobile: boolean;

  public focused: boolean;
  useIonDateTime: boolean;

  dateTimeVal = '';
  ionDisplayFormat: string;
  ionMin: string;
  ionMax: string;

  @Input() label: string;
  @Input() form: FormGroup;
  @Input() control: string;

  @Input() color: string;

  @Input() sourceCalendar: boolean;

  @Input() includeTime: boolean;

  @Input() datetimeFrom: boolean;
  @Input() datetimeTo: boolean;

  @Input() min: Date;
  @Input() max: Date;

  @ViewChild('trackAutoCompleteInput', { read: MatAutocompleteTrigger, static: false })
  @ViewChild(TimeautocompleteComponent, { static: false }) child;

  trackAutoCompleteInput: MatAutocompleteTrigger;

  constructor(public dtservice: DatePickerService,
              public platform: Platform,
              public data: DataService,
              ) {}

  ngOnInit() {
    /* Detect platform */
    this.isMobile = this.platform.is('ios') || this.platform.is('android');
    if (this.isMobile) {
      this.useIonDateTime = true;
    } else {
      this.useIonDateTime = false;
    }

    /* Set format based on "All day" toggle */
    if (this.includeTime) {
      this.ionDisplayFormat = 'DD/MM/YYYY HH:mm';
      this.placeholder = 'DD/MM/YYYY HH:mm';
    } else {
      this.ionDisplayFormat = 'DD/MM/YYYY';
      this.placeholder = 'DD/MM/YYYY';
    }

    /* Field is blurred */
    this.focused = false;

    /* Set primary color scheme by default */
    if (!this.color || this.color === '') {
      this.color = 'primary';
    }

      /* IF SOURCE IS "NEW EVENT" I.E. JUST DATES */

    if (this.sourceCalendar === false) {
        this.from = null;
        this.dtservice.newStartDate.next(this.from);

        this.to = null;
        this.dtservice.newEndDate.next(this.to);

      } else {

    // Set this.from & this.to dates based on calendar object
    // this.dtservice.newStartDate.next(this.data.calSessionAddObj.data.StartTime);
    // this.dtservice.newEndDate.next(this.data.calSessionAddObj.data.EndTime);

    /* Subscribe to startTime & endTime */
      this.dtservice.newStartDate.subscribe(data => {
      this.from = data;

      if (this.control === 'eventStartDate') {
        this.date = this.from;
        if (this.includeTime) {
          this.pageoutput = format(new Date(this.from), 'dd/MM/yyyy HH:mm');
          this.ionPageOutput = formatISO(new Date(this.from));
        } else {
          this.pageoutput = format(new Date(this.from), 'dd/MM/yyyy');
          this.ionPageOutput = formatISO(new Date(this.from));
        }
      }
      this.form.controls[this.control].setValue(this.from);
      this.form.updateValueAndValidity();
    });

      this.dtservice.newEndDate.subscribe(data => {
      this.to = data;

      if (this.control === 'eventEndDate') {
        this.date = this.to;
        if (this.includeTime) {
          this.pageoutput = format(new Date(this.to), 'dd/MM/yyyy HH:mm');
          this.ionPageOutput = formatISO(new Date(this.to));
        } else {
          this.pageoutput = format(new Date(this.to), 'dd/MM/yyyy');
          this.ionPageOutput = formatISO(new Date(this.to));
        }
      }
      this.form.controls[this.control].setValue(this.from);
      this.form.updateValueAndValidity();
    });

    }
  }

ngOnChanges() {

    if (this.includeTime) {
      this.ionDisplayFormat = 'DD/MM/YYYY HH:mm';
      this.placeholder = 'DD/MM/YYYY HH:mm';
      if (this.date === undefined ) {} else {
        this.pageoutput = format(new Date(this.date), 'dd/MM/yyyy HH:mm');
      }
    } else {
      this.ionDisplayFormat = 'DD/MM/YYYY';
      this.placeholder = 'DD/MM/YYYY';
      if (this.date === undefined ) {} else {
        this.pageoutput = format(new Date(this.date), 'dd/MM/yyyy');
      }
    }
  }

dateEntered(date, source) {

    if (source === 'iondatetime') {
      this.date = parseISO(date.target.value);
    } else {

    // Check this.time, set to 00:00 if blank or undefined
    this.time = (this.time === undefined || '') ? '00:00' : this.time;

    // Set this.date including this.time
    if (source !== 'self') {
      this.date = format(date.value, 'EEE MMM dd yyyy') + ' ' + this.time + ':00';
    } else {
      this.date = format(date, 'EEE MMM dd yyyy') + ' ' + this.time + ':00';
     }

    }

    // Write to ion-input on page
    if (this.includeTime) {
      this.pageoutput = format(new Date(this.date), 'dd/MM/yyyy HH:mm');
    } else {
      this.pageoutput = format(new Date(this.date), 'dd/MM/yyyy');
    }

    // Write values to form
    if (this.control === 'eventStartDate') {
      this.dtservice.newStartDate.next(this.date);
      this.dtservice.newStartTimestamp.next(getTime(new Date(this.date)));
      this.form.controls[this.control].setValue(new Date(this.date));
    }

    if (this.control === 'eventEndDate') {
      this.dtservice.newEndDate.next(this.date);
      this.dtservice.newEndTimestamp.next(getTime(new Date(this.date)));
      this.form.controls[this.control].setValue(new Date(this.date));
    }

  }

timeSelected(timeObj) {
    this.time = timeObj[1];

    if (this.control === 'eventStartDate') {

      // If there is no date entered put in today's date
      if (this.date === ('' || undefined)) {
        this.date = startOfToday();
      }

   //   Data.startTimeVal = timeObj[0];
    } else if (this.control === 'eventEndDate') {
      // If there is no date entered put in today's date
      if (this.date === ('' || undefined)) {
        this.date = startOfToday();
      }
    }

    this.dateEntered(new Date(this.date), 'self');

  }

focus() {
    if (this.control === 'eventStartDate') {
      this.dtservice.newEndDate.subscribe(newdate => {
          if (newdate === null) {} else {
          this.max = new Date(newdate);
          this.ionMax = formatISO(this.max);
        }
      });
    }

    if (this.control === 'eventEndDate') {
      this.dtservice.newStartDate.subscribe(newdate => {
        if (newdate === null) {} else {
          this.min = new Date(newdate);
          this.ionMin = formatISO(this.min);
        }
      });
    }

    this.pickerOpen = !this.pickerOpen;
    this.togglefocused();
  }

togglefocused() {
    this.focused = !this.focused;
  }

checkFocus() {
    this.focused = true;
  }

checkBlur() {
    this.focused = false;
  }

searchOptions(ev) {
    ev.stopPropagation();
    this.triggerAutocomplete();
  }

triggerAutocomplete() {
    this.child.open();
  }
}
