import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { GeneralInfoModalPage } from '../general-info-modal/general-info-modal';
import { WelcomeModalPage } from '../welcome-modal/welcome-modal';
import { BedfordBoysModalPage } from '../bedford-boys-modal/bedford-boys-modal';
import { DdayTodayModalPage } from '../dday-today-modal/dday-today-modal';
import { AtMemorialModalPage } from '../at-memorial-modal/at-memorial-modal';
import { SupportModalPage } from '../support-modal/support-modal';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  genInfoModal: any = GeneralInfoModalPage;
  welcomeModal: any = WelcomeModalPage;
  bedfordBoysModal: any = BedfordBoysModalPage;
  ddayTodayModal: any = DdayTodayModalPage;
  atMemorialModal: any = AtMemorialModalPage;
  supportModal: any = SupportModalPage;

  constructor(public modalCtrl: ModalController) {
  }

  openModal(modal: any) {
    let myModal = this.modalCtrl.create(modal, {'modal': 'modal'});
    myModal.present();
  }

}
