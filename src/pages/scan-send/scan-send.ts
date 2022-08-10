import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {VehiclesPage} from "../vehicles/vehicles";

/**
 * Generated class for the ScanSendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-scan-send',
    templateUrl: 'scan-send.html',
})
export class ScanSendPage {

    data: any;

    constructor(public navCtrl: NavController,
                public authService: AuthServiceProvider,
                public apiService: ApiServiceProvider,
                public navParams: NavParams) {
        this.data = {
            left_img: '',
            right_img: '',
            center_img: '',
            make: '',
            model: '',
            year: ''
        };
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScanSendPage');
        this.loadImgs();
    }

    async loadImgs() {
        this.data.left_img = await this.authService.loadVehicleImage('left-side');
        this.data.right_img = await this.authService.loadVehicleImage('right-side');
        this.data.center_img = await this.authService.loadVehicleImage('center-side');
    }

    sendCapture() {
        this.redirectPage();
        // this.apiService.sendCapture(this.data).then(res => {
        //     this.authService.storeVehicleImage('left-side', '');
        //     this.authService.storeVehicleImage('center-side', '');
        //     this.authService.storeVehicleImage('right-side', '');
        //     this.redirectPage();
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    async redirectPage() {
        if (await this.authService.isAuthenticated()) {
            this.navCtrl.setRoot(VehiclesPage);
        }else {
            this.navCtrl.push('LoginHomePage');
        }
    }

}
