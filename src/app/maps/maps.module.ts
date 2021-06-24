import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MatInputModule, MatAutocompleteModule } from '@angular/material';

import { MapsPageRoutingModule } from './maps-routing.module';

import { MapsPage } from './maps.page';
import { GoogleplacessearchComponent } from './components/googleplacessearch/googleplacessearch.component';
import { MapsautocompleteComponent } from './components/autocomplete/autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MapsPageRoutingModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [MapsPage, GoogleplacessearchComponent, MapsautocompleteComponent]
})
export class MapsPageModule {}
