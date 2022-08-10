import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanCenterPage } from './scan-center';

@NgModule({
  declarations: [
    ScanCenterPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanCenterPage),
  ],
})
export class ScanCenterPageModule {}
