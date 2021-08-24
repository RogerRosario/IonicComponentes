import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { isJsxClosingFragment } from 'typescript';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  async mostrarModal(){
    
    const modal = await this.modalCrtl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Roger',
        pais: 'Argentina'
      }
    });
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
    console.log('onWillDismiss');

    console.log(data);
    console.log(JSON.stringify(data));
  }

}
