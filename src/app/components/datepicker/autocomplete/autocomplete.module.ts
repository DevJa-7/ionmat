import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TimeautocompleteComponent } from './autocomplete.component';

import { MatInputModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [
    TimeautocompleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
  ],
  exports: [
    TimeautocompleteComponent
  ],
  entryComponents: [
    TimeautocompleteComponent
  ]
})
export class TimeautocompleteModule {}