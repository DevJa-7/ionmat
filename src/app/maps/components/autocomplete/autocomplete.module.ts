import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { MapsautocompleteComponent } from './autocomplete.component';

import { MatInputModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [
    MapsautocompleteComponent
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
    MapsautocompleteComponent
  ],
  entryComponents: [
    MapsautocompleteComponent
  ]
})
export class MapsautocompleteModule {}