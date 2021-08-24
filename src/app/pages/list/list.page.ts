import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  usuarios: Observable<any>;

  @ViewChild(IonList) ionList: IonList;

  constructor(private service: DataService) { }

  ngOnInit() {
    this.usuarios = this.service.getUsuarios();
  }

  share(user: any){
    console.log('share', user);
    this.ionList.closeSlidingItems();
  }
  
  favorite(user: any){
    console.log('favorite', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any){
    console.log('Deleted', user.name);
    this.ionList.closeSlidingItems();
  }
  

  // getData(service){
  //   this.service.getUsuarios();
  // }

}
