import { Component, OnInit } from '@angular/core';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  public searchForm: FormGroup;
  public addressForm: FormGroup;

  public predictions: Array<any>;

  constructor(private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      locSearch: ['', ],
      });

    this.addressForm = this.formBuilder.group({
      location_name: ['', Validators.required ],
      street_address: ['', ],
      address2: ['', ],
      city: ['', ],
      region: ['', ],
      country: ['', ],
      postal_code: ['', ],
      });
  }

  ngOnInit() {
    this.predictions = [ 'Place One', 'Place Two', 'Place Three', 'Place Four', 'Place Five'];
  }

}
