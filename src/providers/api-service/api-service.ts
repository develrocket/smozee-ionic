import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController, Loading} from "ionic-angular";
import {ENV} from "../../config/environment";
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {

    loading: Loading;

    private SEND_CAPTURE_URL = ENV.SERVER_URL + '/test';
    private LAST_TRANSACTION_URL = ENV.SERVER_URL + '/test';
    private VEHICLES_URL = ENV.SERVER_URL + '/test';
    private TRANSACTIONS_URL = ENV.SERVER_URL + '/test';
    private USER_DETAIL_URL = ENV.SERVER_URL + '/test';
    private UPDATE_USER_URL = ENV.SERVER_URL + '/test';
    private CHANGE_PASSWORD_URL = ENV.SERVER_URL + '/test';


    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController) {
        console.log('Hello ApiServiceProvider Provider');
    }


    sendCapture(data) {
        let httpOpts: any = {
            responseType: 'json'
        };


        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();

            this.http.post(this.SEND_CAPTURE_URL, data, httpOpts).subscribe(
                data => {
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log('Send Vehicle Capture')
            );
        });
    }

    loadUrl(type) {
        switch(type) {
            case 'last_transaction':
                return this.LAST_TRANSACTION_URL;
            case 'load_vehicles':
                return this.VEHICLES_URL;
            case 'load_transaction':
                return this.TRANSACTIONS_URL;
            case 'load_user_info':
                return this.USER_DETAIL_URL;
            case 'update_user':
                return this.UPDATE_USER_URL;
            case 'change_password':
                return this.CHANGE_PASSWORD_URL;
            default:
                return;
        }
    }

    getRequest(type) {
        let httpOpts: any = {
            responseType: 'json'
        };


        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();

            this.http.get(this.loadUrl(type), httpOpts).subscribe(
                data => {
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log(type)
            );
        });
    }

    postRequest(type, data) {
        let httpOpts: any = {
            responseType: 'json'
        };


        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();

            this.http.post(this.loadUrl(type), data, httpOpts).subscribe(
                data => {
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log(type)
            );
        });
    }
}
