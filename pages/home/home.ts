import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  name: any = 'vilasini';
  array: any = [];
  countMap: Map<any, any> = new Map<any, any>();

  constructor(public navCtrl: NavController) {}

  ngOnInit() {
    this.array = this.name.split('');
    console.log(this.array);
    for (let entity of this.array) {
      if (this.countMap.has(entity)) {
        let count = this.countMap.get(entity);
        count = count + 1;
        this.countMap.set(entity, count);
      } else {
        this.countMap.set(entity, 1);
      }
    }
    this.countMap.forEach((element) => {
      console.log(element);
    });
  }
}
