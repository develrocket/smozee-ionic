import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {LoginPage} from "../login/login";

/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-terms',
    templateUrl: 'terms.html',
})
export class TermsPage {

    constructor(public navCtrl: NavController,
                public authService: AuthServiceProvider,
                public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TermsPage');
    }

    acceptTerms() {
        this.authService.setFirstOpen(true);
        this.navCtrl.push(LoginPage);
    }

}
