import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoadingController, Loading} from "ionic-angular";
import {ENV} from "../../config/environment";
import {Storage} from '@ionic/storage';
import {AlertController} from 'ionic-angular';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

    loading: Loading;

    private SIGNIN_URL = ENV.SERVER_URL + '/login.php';
    private FORGOT_PASSWORD_URL = ENV.SERVER_URL + 'test';
    private REGISTER_URL = ENV.SERVER_URL + 'test';
    private VERIFY_URL = ENV.SERVER_URL + 'test';


    constructor(public http: HttpClient,
                public loadingCtrl: LoadingController,
                public alertCtrl: AlertController,
                public storage: Storage) {
        console.log('Hello AuthServiceProvider Provider');
    }

    async isFirstOpen() {
        let firstOpen = await this.storage.get('firstOpen');
        if (firstOpen) {
            return true;
        }
        return false;
    }

    async isAuthenticated() {
        let username = await this.storage.get('username');
        let password = await this.storage.get('password');
        if (username && password) {
            return true;
        }
        return false;
    }

    async getUsername() {
        let username = await this.storage.get('username');
        return username;
    }

    async getPassword() {
        let password = await this.storage.get('password');
        return password;
    }

    storeVehicleImage(key, image) {
        this.storage.set(key, image);
    }

    async loadVehicleImage(key) {
        let image = await this.storage.get(key);
        return image;
    }

    setFirstOpen(value) {
        this.storage.set('firstOpen', value);
    }


    login(userData) {

        let httpOpts: any = {
            responseType: 'json'
        };


        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();


            this.http.post(this.SIGNIN_URL, userData, httpOpts).subscribe(
                data => {
                    console.log(data);
                    this.loading.dismiss();
                    if (data) {
                        this.storage.set('username', userData.username);
                        this.storage.set('password', userData.password);
                    } else {
                        let alert = this.alertCtrl.create({
                            message: 'Account Inactive.',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    handler: () => {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        });
                        alert.present();
                    }
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log('User Login')
            );
        });
    }

    forgotPassword(userData) {

        let httpOpts: any = {
            responseType: 'json'
        };

        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();


            this.http.post(this.FORGOT_PASSWORD_URL, userData, httpOpts).subscribe(
                data => {
                    console.log(data);
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log('Forgot Password')
            );
        });
    }

    register(userData) {

        let httpOpts: any = {
            responseType: 'json'
        };

        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();


            this.http.post(this.REGISTER_URL, userData, httpOpts).subscribe(
                data => {
                    console.log(data);
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log('Sign Up')
            );
        });
    }

    verify(userData) {
        let httpOpts: any = {
            responseType: 'json'
        };

        return new Promise((resolve, reject) => {
            this.loading = this.loadingCtrl.create();
            this.loading.present();


            this.http.post(this.VERIFY_URL, userData, httpOpts).subscribe(
                data => {
                    console.log(data);
                    this.loading.dismiss();
                    resolve(data);
                },
                err => {
                    this.loading.dismiss();
                    reject(err);
                },
                () => console.log('User Verify')
            );
        });
    }

    logOut() {
        this.storage.remove('username');
        this.storage.remove('password');
        this.storage.remove('crewname');
    }
}
