import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, AlertController, LoadingController, ModalController, Content } from 'ionic-angular';
import { MemorialSearchProvider } from '../../providers/memorial-search/memorial-search';
import { BrickSearchModalPage } from '../brick-search-modal/brick-search-modal';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-brick',
  templateUrl: 'brick.html',
})
export class BrickPage {
  @ViewChild('fixedContentContainer') fixedContentContainer: ElementRef;
  @ViewChild(Content) content: Content;

  brickData: any = [];
  
  showResults: boolean = false;
  searchTerm: string = '';
  searching: any = false;
  allData = []; //Store all data from provider
  filterData = [];//Store filtered data

  private _subscription:Subscription;

    constructor(private searchProvider: MemorialSearchProvider, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private modalCtrl: ModalController) {
      
    }

    ionViewDidEnter(){
      this._subscription = this.searchProvider.getBrickJSON().subscribe(
        result => {
        
        this.allData = result;
        //console.log(this.allData);
        });
  
      this.filterData = this.allData;

      let fixedContainer = this.fixedContentContainer.nativeElement;

      // Get the height of the fixed item
      let itemHeight = fixedContainer.offsetHeight;
      let scroll = this.content.getScrollElement();

      //add preexisting scroll margin to fixed container size
      itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px","")) + itemHeight;
      scroll.style.marginTop = itemHeight + 'px';

      
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

            if (this.searchTerm.indexOf(' ') > -1) {
              var firstName = this.searchTerm.substring(0, this.searchTerm.indexOf(' '));

              var lastName = this.searchTerm.substring(this.searchTerm.indexOf(' ') + 1);

              console.log(item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1);

              return item.name.toLowerCase().indexOf(firstName.toLocaleLowerCase()) > -1 && item.name.toLowerCase().indexOf(lastName.toLocaleLowerCase()) > -1;

            } else {
              return item.name.toLowerCase().indexOf(this.searchTerm.toLocaleLowerCase()) > -1;
            }
  
          });
            loading.dismiss(); 
            this.showResults = true;
        });
      }
    }
  
    soldierClicked(item: any) {
      //console.log(item);
      const modal = this.modalCtrl.create(BrickSearchModalPage, {soldier: item});
      modal.present();
    }

  }
