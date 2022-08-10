import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {ApiServiceProvider} from "../../providers/api-service/api-service";
import {AlertController} from "ionic-angular";

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})
export class ProfilePage {

    userForm: any;

    constructor(public navCtrl: NavController,
                public formBuilder: FormBuilder,
                public alertCtrl: AlertController,
                public apiService: ApiServiceProvider,
                public navParams: NavParams) {
        this.userForm = this.formBuilder.group({
            username: new FormControl('', Validators.required),
            email: new FormControl('', Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            first_name: new FormControl('', Validators.required),
            last_name: new FormControl('', Validators.required),
            solution: new FormControl('', Validators.required),
            dob: new FormControl('', Validators.required),
            phone_number: new FormControl('', Validators.required),
            address1: new FormControl('', Validators.required),
            address2: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            confirmPassword: new FormControl('', Validators.required),
        }, {validator: this.matchingPasswords('password', 'confirmPassword')});
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProfilePage');
        // this.loadUserInfo();
    }

    matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
        return (group: FormGroup): {[key: string]: any} => {
            let password = group.controls[passwordKey];
            let confirmPassword = group.controls[confirmPasswordKey];

            if (password.value !== confirmPassword.value) {
                return {
                    mismatchedPasswords: true
                };
            }
        }
    }

    loadUserInfo() {
        this.apiService.postRequest('load_user_info', {userId: 1}).then(res => {
            // this.userForm.get('username').setValue(res['username']);
        }).catch(err => {
            console.log(err);
        })
    }

    update() {
        // if (!this.userForm.valid) {
        //     return;
        // }
        //
        // this.apiService.postRequest('update_user', this.userForm.value).then(res => {
        //     const alert = this.alertCtrl.create({
        //         title: 'Success!',
        //         subTitle: 'Your information is updated successfully!!',
        //         buttons: ['OK']
        //     });
        //     alert.present();
        // }).catch(err => {
        //     console.log(err);
        // })
    }
}
