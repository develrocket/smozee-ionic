import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {SplashPage} from "../pages/splash/splash";
import {TermsPage} from "../pages/terms/terms";
import {LoginPage} from "../pages/login/login";

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {IonicStorageModule} from '@ionic/storage';
import {HttpClientModule} from "@angular/common/http";
import {AuthServiceProvider} from '../providers/auth-service/auth-service';
import {Camera} from '@ionic-native/camera';
import {ApiServiceProvider} from '../providers/api-service/api-service';
import {VehiclesPage} from "../pages/vehicles/vehicles";
import {TransactionsPage} from "../pages/transactions/transactions";
import {ProfilePage} from "../pages/profile/profile";
import {ChangePasswordPage} from "../pages/change-password/change-password";


@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
        SplashPage,
        TermsPage,
        LoginPage,
        VehiclesPage,
        TransactionsPage,
        ProfilePage,
        ChangePasswordPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage,
        SplashPage,
        TermsPage,
        LoginPage,
        VehiclesPage,
        TransactionsPage,
        ProfilePage,
        ChangePasswordPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthServiceProvider,
        Camera,
        ApiServiceProvider
    ]
})
export class AppModule {
}
