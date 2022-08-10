import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {TermsPage} from "../pages/terms/terms";
import {SplashPage} from "../pages/splash/splash";
import {LoginPage} from "../pages/login/login";
import {VehiclesPage} from "../pages/vehicles/vehicles";
import {TransactionsPage} from "../pages/transactions/transactions";
import {ProfilePage} from "../pages/profile/profile";
import {ChangePasswordPage} from "../pages/change-password/change-password";

import {AuthServiceProvider} from "../providers/auth-service/auth-service";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = SplashPage;

    pages: Array<{ title: string, component: any, iconName: string }>;

    constructor(public platform: Platform,
                public statusBar: StatusBar,
                public authService: AuthServiceProvider,
                public splashScreen: SplashScreen) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            {title: 'Dashboard', component: HomePage, iconName: 'ios-speedometer'},
            {title: 'Vehicles', component: VehiclesPage, iconName: 'ios-car'},
            {title: 'Transactions', component: TransactionsPage, iconName: 'ios-cash'},
            {title: 'Profile', component: ProfilePage, iconName: 'ios-contact'},
            {title: 'Change Password', component: ChangePasswordPage, iconName: 'ios-key'},
            {title: 'Log Out', component: '', iconName: 'log-out'}
        ];

        this.resetRoot();
    }

    async resetRoot() {
        if (await this.authService.isFirstOpen()) {
            if (await this.authService.isAuthenticated()) {
                this.rootPage = HomePage;
            }else {
                this.rootPage = LoginPage;
            }
        }else {
            this.rootPage = TermsPage;
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.component) {
            this.nav.setRoot(page.component);
        }else {
            this.authService.logOut();

            this.nav.setRoot(LoginPage);
        }
    }
}
