import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    transaction: any;
    vehicles: any;

    constructor(public navCtrl: NavController,
                public apiService: ApiServiceProvider) {

        this.transaction = {
            plate_no: 'MAH41',
            site: 'test',
            in_time: '00:00:00',
            out_time: '00:00:00',
            amount: 'RM 25'
        };

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
        // this.loadLastTransaction();
    }

    loadLastTransaction() {
        this.apiService.getRequest('last_transaction').then(res => {
            this.transaction = res;
            this.loadVehicles();
        }).catch(err => {
            console.log(err);
        })
    }

    loadVehicles() {
        this.apiService.getRequest('load_vehicles').then(res => {
            this.vehicles = res;
        }).catch(err => {
            console.log(err);
        })
    }

}
