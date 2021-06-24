import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { ListPage } from './list.page';

import { ScrollDetectorDirective } from '../directives/scroll-detector.directive';
import { DragScrollModule } from 'cdk-drag-scroll';

// import { DataItemComponent } from './data-item/data-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragDropModule,
    DragScrollModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      },
      // {
      //   path: ':id',
      //   component: DataItemComponent
      // }
    ])
  ],
  declarations: [
    ListPage, 
    ScrollDetectorDirective,
    // DataItemComponent
  ]
})
export class ListPageModule {}
