import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-bedford-boys-modal',
  templateUrl: './bedford-boys-modal.page.html',
  styleUrls: ['./bedford-boys-modal.page.scss'],
})
export class BedfordBoysModalPage {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

}
