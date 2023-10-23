import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-general-info-modal',
  templateUrl: './general-info-modal.page.html',
  styleUrls: ['./general-info-modal.page.scss'],
})
export class GeneralInfoModalPage {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }

}
