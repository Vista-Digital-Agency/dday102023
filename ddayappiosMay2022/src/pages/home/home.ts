import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { VisitingPage } from '../visiting/visiting';
import { MapPage } from '../map/map';
import { InfoPage } from '../info/info';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('video1') videoPlayer:ElementRef;
  @ViewChild(Content) content: Content;

  visitingPage: any = VisitingPage;
  mapPage: any = MapPage;
  infoPage: any = InfoPage;

  constructor(public navCtrl: NavController, public screenOrientation: ScreenOrientation) {
    
  }

  ionViewDidEnter() {

    this.screenOrientation.onChange().subscribe(
      () => {
        setTimeout( () => { 
          this.content.resize();  
          console.log('changed');
        }, 100);
    });

    let video = this.videoPlayer.nativeElement;
    video.type="video/mp4";
    video.src= "assets/videos/ddayVideo.mp4";
    video.load();
    video.volume = 0.05;
    video.pause();
    var playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.then(_ => {
        
      })
      .catch(error => {
        video.setAttribute("controls", "controls");
        console.log(error);
        // Auto-play was prevented
        // Show paused UI.
      });

    }

    document.addEventListener("pause", onPause, false);
      function onPause() {
        video.stop();
    }
  }

  openPage(page: any) {
    this.navCtrl.setRoot(page);
  }

}
