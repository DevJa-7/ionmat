import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GooglemapsService } from '../../../services/googlemaps.service';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalmap',
  templateUrl: './modalmap.component.html',
  styleUrls: ['./modalmap.component.scss'],
})
export class ModalmapComponent implements OnInit {

  chosenlocation;
  @ViewChild('addresstext', { static: false }) addresstext: ElementRef;

  constructor(
    public mapService: GooglemapsService,
    navParams: NavParams,
    public modalController: ModalController
    ) { 
   this.chosenlocation = navParams.get('chosenlocation');
  }
  ngOnInit(){}
  
  ngAfterViewInit() {
    this.mapService.mapElement = this.addresstext.nativeElement;
    setTimeout(() => {
      this.mapService.initMap(this.chosenlocation.lat, this.chosenlocation.lng, this.chosenlocation.name).then(()=>{
        console.info('done initMap')
      });
    }, 500);
  }

  editLoc(){
    this.mapService.editLoc();
  }

  doneEdit(){
    const newLoc = this.mapService.doneEdit();
    this.chosenlocation.lat = newLoc.lat();
    this.chosenlocation.lng = newLoc.lng();
    this.modalController.dismiss({loc: this.chosenlocation});
  }
}
