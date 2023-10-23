import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-at-memorial-modal',
  templateUrl: './at-memorial-modal.page.html',
  styleUrls: ['./at-memorial-modal.page.scss'],
})
export class AtMemorialModalPage {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

}
