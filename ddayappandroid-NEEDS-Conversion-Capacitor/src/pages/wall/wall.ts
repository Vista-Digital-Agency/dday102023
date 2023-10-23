import { Component } from '@angular/core';
import { IonicPage, LoadingController, ModalController, AlertController } from 'ionic-angular';
import { MemorialSearchProvider } from '../../providers/memorial-search/memorial-search';
import { MemorialSearchModalPage } from '../memorial-search-modal/memorial-search-modal';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {
  
  memorialData: any = [];
  
  showResults: boolean = false;
  searchTerm: string = '';
  searching: any = false;
  allData = []; //Store all data from provider
  filterData = [];//Store filtered data

  private _subscription:Subscription;

  constructor(private searchProvider: MemorialSearchProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private modalCtrl: ModalController) {

  }



  
  ionViewDidEnter(){
    this._subscription = this.searchProvider.getJSON().subscribe(
      result => {
      
      this.allData = result;
      });

    this.filterData = this.allData;
  }

  ionViewDidLeave() {
    this._subscription.unsubscribe();
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: 'Please enter a valid name to search',
      buttons: ['Dismiss']
    });
    alert.present();
  } 

  getItems(event) {
    if(this.searchTerm == "") {
      this.presentAlert();
    } else {
      let loading = this.loadingCtrl.create({
        content: `
        <ion-spinner></ion-spinner>`
      });
      loading.present().then(()=>{

        this.filterData = this.allData.filter((item) => {

          var name = item.first_name.toLocaleLowerCase();
          
          name = name + " " + item.last_name.toLocaleLowerCase();

          return name.indexOf(this.searchTerm.toLocaleLowerCase()) > -1;

        });
          loading.dismiss(); 
          this.showResults = true;
      });
    }
  }

  soldierClicked(item: any) {
    //console.log(item);
    const modal = this.modalCtrl.create(MemorialSearchModalPage, {soldier: item});
    modal.present();
  }

}
