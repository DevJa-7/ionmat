import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { UnsplashSelectorComponent } from '../unsplash-selector/unsplash-selector.component';
import { filter } from 'rxjs/operators';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-image-uploader',
  templateUrl: './image-uploader.component.html',
  styleUrls: ['./image-uploader.component.scss'],
})
export class ImageUploaderComponent implements OnInit {

  files: File[] = [];

  constructor(private dialog: MatDialog,
              private modalCtrl: ModalController) { }

  ngOnInit() { }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  async openUnsplashModal() {
    /* const dialogRef = this.dialog.open(UnsplashSelectorComponent,
      {
        width: '500px'
      }); */

    const modal = await this.modalCtrl.create({
        component: UnsplashSelectorComponent
      });
    return await modal.present();

    }


}
