import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('video1') videoPlayer:ElementRef;
  @ViewChild(IonContent) content: IonContent;



  constructor(private router: Router) {}

  ionViewDidEnter() {

    /*this.screenOrientation.onChange().subscribe(
      () => {
        setTimeout( () => { 
          this.content.resize();  
          console.log('changed');
        }, 100);
    });*/

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
  openPage(page) {
    this.router.navigate(['/' + page])
  }

}
