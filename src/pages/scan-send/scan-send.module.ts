import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanSendPage } from './scan-send';

@NgModule({
  declarations: [
    ScanSendPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanSendPage),
  ],
})
export class ScanSendPageModule {}
