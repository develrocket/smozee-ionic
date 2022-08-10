import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup, FormControl} from '@angular/forms';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    userForm: any;

    constructor(public navCtrl: NavController,
                public formBuilder: FormBuilder,
                public authService: AuthServiceProvider,
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
        console.log('ionViewDidLoad RegisterPage');
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

    register() {
        this.navCtrl.push('VerifyPage', {type: 'email'});
        // console.log(this.userForm.value);
        // console.log(this.userForm.valid);
        // if (!this.userForm.valid) {
        //     return;
        // }
        //
        // this.authService.register(this.userForm.value).then(res => {
        //     this.navCtrl.push('VerifyPage', {type: 'email'});
        // }).catch(err => {
        //     console.log(err);
        // })
    }

}
