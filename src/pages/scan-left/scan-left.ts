import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ScanLeftPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-scan-left',
    templateUrl: 'scan-left.html',
})
export class ScanLeftPage {

    leftImg: any;
    vehicleInfo: any;

    constructor(public navCtrl: NavController,
                private camera: Camera,
                public authService: AuthServiceProvider,
                public navParams: NavParams) {
        this.leftImg = '';
        this.vehicleInfo = this.navParams.get('vehicle');

        if (this.vehicleInfo) {
            //set vehicle images
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ScanLeftPage');
        this.loadPreviousImg();
    }

    async loadPreviousImg() {
        this.leftImg = await this.authService.loadVehicleImage('left-side');
    }


    capture() {
        let options: CameraOptions = {
            quality: 100,
            targetWidth: 1024,
            targetHeight: 1024,
            allowEdit: false,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            saveToPhotoAlbum: true
        };

        this.camera.getPicture(options).then((imageData) => {
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            this.leftImg = base64Image;
        }, (err) => {
            console.log(err);
        });
    }

    goNext() {
        this.authService.storeVehicleImage('left-side', this.leftImg);
        this.navCtrl.push('ScanCenterPage');
    }
}
