import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: false
    },
    {
      name: 'secondary',
      selected: true
    },
    {
      name: 'success',
      selected: true
    },
    {
      name: 'light',
      selected: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }
  onClick(item: any ){
    console.log(item);
    console.log(JSON.stringify(item));
  }

  verData(){
    console.log(this.data);
    console.log(JSON.stringify(this.data));
  }

}
