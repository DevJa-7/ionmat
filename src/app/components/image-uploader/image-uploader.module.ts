import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { UnsplashSelectorComponent } from './unsplash-selector/unsplash-selector.component';
import { MatDialogModule} from '@angular/material';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [ImageUploaderComponent, UnsplashSelectorComponent],
  entryComponents: [UnsplashSelectorComponent],
  imports: [
    CommonModule,
    IonicModule,
    MatDialogModule,
    NgxDropzoneModule
  ],
  exports: [ImageUploaderComponent],
  providers: []
})
export class ImageUploaderModule { }
