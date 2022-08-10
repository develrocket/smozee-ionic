import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScanLeftPage } from './scan-left';

@NgModule({
  declarations: [
    ScanLeftPage,
  ],
  imports: [
    IonicPageModule.forChild(ScanLeftPage),
  ],
})
export class ScanLeftPageModule {}
