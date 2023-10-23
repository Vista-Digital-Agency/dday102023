import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-brick-search-modal',
  templateUrl: 'brick-search-modal.html',
})
export class BrickSearchModalPage {
  soldier: any;
  map: string = "";
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.soldier = this.navParams.get("soldier");
  }


  ionViewDidEnter() {
    if (this.soldier['section'] == "Gold Star Garden") {
      this.map = "assets/imgs/goldStarBricks.png";
    } else if (this.soldier['section'] == "Stettinius Parade One") {
      this.map = "assets/imgs/stettiniusSection1.png";
    } else if (this.soldier['section'] == "Stettinius Parade Two") {
      this.map = "assets/imgs/stettiniusSection2.png";
    } else if (this.soldier['section'] == "Blue Star Garden") {
      this.map = "assets/imgs/blueStarGarden.png";
    }
  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
