import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cherry-trees-search-modal',
  templateUrl: 'cherry-trees-search-modal.html',
})
export class CherryTreesSearchModalPage {

  soldier: any;
  map: string = "";
  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.soldier = this.navParams.get("soldier");
  }


  ionViewDidEnter() {
      this.map = "assets/imgs/cherryTreeMap.png";
  }
  

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
