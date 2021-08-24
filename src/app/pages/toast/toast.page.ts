import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastCrtl: ToastController) { }

  ngOnInit() {
  }

  async presentToast() {
    const toast = await this.toastCrtl.create({
      message: 'Toast Presentado',
      position: 'top',
      duration: 1500
    });
    toast.present();
  }
    
  async presentToastWithOptions() {
    const toast = await this.toastCrtl.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      duration: 2000,
      buttons: [
        {
          side: 'start',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
