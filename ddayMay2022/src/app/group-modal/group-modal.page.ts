import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.page.html',
  styleUrls: ['./group-modal.page.scss'],
})
export class GroupModalPage {

  constructor(public modalController: ModalController) { }

  dismiss() {
    this.modalController.dismiss();
  }


}
