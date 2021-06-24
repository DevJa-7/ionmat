import { Component, ViewChild, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { MatAutocompleteTrigger } from '@angular/material';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss'],
})
export class MapsautocompleteComponent implements OnInit {

  @Input() predictions: Array<any>;

  @Output() opened = new EventEmitter<any>();

  @Output() closed = new EventEmitter<any>();

  @Output() locSelected = new EventEmitter<any>();

  @ViewChild('optionAutoCompleteInput', { read: MatAutocompleteTrigger, static: false })

  optionAutoCompleteInput: MatAutocompleteTrigger;

  constructor() {}

  ngOnInit() {}



  optionSelected(event) {
    // emits option 
    this.locSelected.emit(event.option.value);
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
