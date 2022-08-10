import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-vehicles',
    templateUrl: 'vehicles.html',
})
export class VehiclesPage {

    vehicles: any;

    constructor(public navCtrl: NavController,
                public apiService: ApiServiceProvider,
                public navParams: NavParams) {

        this.vehicles = [
            {
                img: './assets/imgs/car1.jpg',
                info: 'test',
                plate_no: 'ABC123'
            },
            {
                img: './assets/imgs/car2.jpg',
                info: 'test1',
                plate_no: 'DBS123'
            }
        ]

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VehiclesPage');
        // this.loadVehicles();
    }

    loadVehicles() {
        this.apiService.getRequest('load_vehicles').then(res => {
            this.vehicles = res;
        }).catch(err => {
            console.log(err);
        })
    }

    editVehicle(data) {
        this.navCtrl.push('ScanLeftPage', {vehicle: data});
    }

    addNew() {
        this.navCtrl.push('ScanLeftPage');
    }

}
