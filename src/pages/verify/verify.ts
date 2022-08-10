import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the VerifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-verify',
    templateUrl: 'verify.html',
})
export class VerifyPage {

    verifyType: any;
    code: any;

    constructor(public navCtrl: NavController,
                public authService: AuthServiceProvider,
                public navParams: NavParams) {
        this.verifyType = this.navParams.get('type');
        this.code = '';
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerifyPage');
    }

    verify() {
        this.authService.verify({code: this.code}).then(res => {
            this.navCtrl.setRoot(HomePage);
        }).catch(err => {
            console.log(err);
        })
    }
}
