import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, IonContent, LoadingController, ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { BrickSearchModalPage } from '../brick-search-modal/brick-search-modal.page';
import { MemorialSearchService } from '../memorial-search.service';

@Component({
  selector: 'app-brick',
  templateUrl: './brick.page.html',
  styleUrls: ['./brick.page.scss'],
})
export class BrickPage {

  @ViewChild('fixedContentContainer') fixedContentContainer: ElementRef;
  @ViewChild(IonContent) content: IonContent;

  brickData: any = [];
  
  showResults: boolean = false;
  searchTerm: string = '';
  searching: any = false;
  allData = []; //Store all data from provider
  filterData = [];//Store filtered data

  private _subscription:Subscription;

    constructor(private searchProvider: MemorialSearchService, public alertCtrl: AlertController, public loadingCtrl: LoadingController, private modalCtrl: ModalController) {
      
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
      /*itemHeight = Number.parseFloat(scroll.style.marginTop.replace("px","")) + itemHeight;
      scroll.style.marginTop = itemHeight + 'px';*/

      
    }
  
    ionViewDidLeave() {
      this._subscription.unsubscribe();
    }
  
    async presentAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Error',
        subHeader: 'Please enter a valid name to search',
        buttons: ['Dismiss']
      });
      await alert.present();
    }  

    async getItems(event) {
      if(this.searchTerm == "") {
        this.presentAlert();
      } else {
        /*let loading = this.loadingCtrl.create({
          content: `
          <ion-spinner></ion-spinner>`
        });*/

        const loading = await this.loadingCtrl.create({spinner: `circles`});
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
  
    async soldierClicked(item: any) {
      //console.log(item);
      //const modal = this.modalCtrl.create(BrickSearchModalPage, {soldier: item});
      //modal.present();

      const modal: HTMLIonModalElement =
      await this.modalCtrl.create({
      component: BrickSearchModalPage,
      componentProps: {
          'soldier': item
        }
      });
      await modal.present();
    }


}
