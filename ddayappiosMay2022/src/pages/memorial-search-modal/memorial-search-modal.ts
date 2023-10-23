import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-memorial-search-modal',
  templateUrl: 'memorial-search-modal.html',
})
export class MemorialSearchModalPage {

  soldier: any;
  flag: string = '';

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.soldier = this.navParams.get('soldier');

    if (this.soldier['country'] == "USA") {
      this.flag = "usa.png";
    } else if (this.soldier['country'] == "United Kingdom") {
      this.flag = "uk.png";
    } else if (this.soldier['country'] == "France") {
      this.flag = "france.png";
    } else if (this.soldier['country'] == "Norway") {
      this.flag = "norway.png";
    } else if (this.soldier['country'] == "Belgium") {
      this.flag = "belgium.png";
    } else if (this.soldier['country'] == "New Zealand") {
      this.flag = "newZealand.png";
    } else if (this.soldier['country'] == "Australia") {
      this.flag = "australia.png";
    } else if (this.soldier['country'] == "Canada") {
      this.flag = "canada.png";
    }
  }

  onClose() {
    this.viewCtrl.dismiss();
  }

}
