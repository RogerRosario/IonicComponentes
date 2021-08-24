import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre: string;
  @Input() pais: string;

  constructor(private modalCrtl: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumento(){
    this.modalCrtl.dismiss();
  }

  salirConArgumento(){
    this.modalCrtl.dismiss({
      nombre: 'Leo Messi',
      pais: 'República Dominicana'
    });
  }

}
 