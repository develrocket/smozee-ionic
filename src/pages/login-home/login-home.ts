import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AlertController} from 'ionic-angular';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-login-home',
    templateUrl: 'login-home.html',
})
export class LoginHomePage {

    userData: any;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public authService: AuthServiceProvider,
                public navParams: NavParams) {
        this.userData = {
            username: '',
            password: ''
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginHomePage');
    }

    login() {
        this.navCtrl.setRoot(HomePage);
        // this.authService.login(this.userData).then(res => {
        //     this.navCtrl.setRoot(HomePage);
        // }).catch(err => {
        //     console.log(err);
        // })
    }

    forgotPassword() {
        const prompt = this.alertCtrl.create({
            title: 'Forgot Password?',
            message: "Enter your email address to send reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: data => {
                        this.authService.forgotPassword(data).then(res => {
                            const alert = this.alertCtrl.create({
                                title: 'Success!',
                                subTitle: 'Email has been sent successfully!',
                                buttons: ['OK']
                            });
                            alert.present();
                        }).catch(err => {
                            console.log(err);
                        })
                    }
                }
            ]
        });
        prompt.present();
    }

    register() {
        this.navCtrl.push('RegisterPage');
    }
}
