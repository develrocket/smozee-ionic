import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {AlertController} from "ionic-angular";

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-change-password',
    templateUrl: 'change-password.html',
})
export class ChangePasswordPage {

    password: any;
    confirmPassword: any;

    constructor(public navCtrl: NavController,
                public apiService: ApiServiceProvider,
                public alertCtrl: AlertController,
                public navParams: NavParams) {
        this.password = '';
        this.confirmPassword = ''
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ChangePasswordPage');
    }


    changePassword() {
        this.apiService.postRequest('change_password', {password: this.password}).then(res => {
            const alert = this.alertCtrl.create({
                title: 'Success!',
                subTitle: 'Your password changed successfully!!',
                buttons: ['OK']
            });
            alert.present();
        }).catch(err => {
            console.log(err);
        })
    }
}
