import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { IonMenu, MenuController } from '@ionic/angular';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit { 
  
  @ViewChild(IonMenu) ionMenu: IonMenu;
  componentes: Observable<Componente[]>;

  constructor(private menuCrtl: MenuController, 
              private dataService: DataService) {}

  ngOnInit(){
    this.componentes = this.dataService.getMenuOpts();
  }
 
  mostrarMenu(){
    this.menuCrtl.open('first');
    // this.menuCrtl.close();
    // this.ionMenu.close();
  }
  
}
