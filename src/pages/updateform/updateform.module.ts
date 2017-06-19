import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateformPage } from './updateform';

@NgModule({
  declarations: [
    UpdateformPage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateformPage),
  ],
  exports: [
    UpdateformPage
  ]
})
export class UpdateformPageModule {}
