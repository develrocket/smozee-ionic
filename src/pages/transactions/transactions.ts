import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";

/**
 * Generated class for the TransactionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-transactions',
    templateUrl: 'transactions.html',
})
export class TransactionsPage {

    transactions: any;

    constructor(public navCtrl: NavController,
                public apiService: ApiServiceProvider,
                public navParams: NavParams) {
        this.transactions = [{
            plate_no: 'MAH41',
            site: 'test',
            in_time: '00:00:00',
            out_time: '00:00:00',
            amount: 'RM 25'
        }, {
            plate_no: 'ABC123',
            site: 'test another',
            in_time: '00:01:00',
            out_time: '00:09:00',
            amount: 'RM 267'
        }];

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TransactionsPage');
        // this.loadTransactions();
    }

    loadTransactions() {
        this.apiService.getRequest('load_transaction').then(res => {
            this.transactions = res;
        }).catch(err => {
            console.log(err);
        })
    }

}
