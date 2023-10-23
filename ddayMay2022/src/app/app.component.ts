import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(public platform: Platform,
              public browser: InAppBrowser) {}

  initializeApp() {
    this.platform.ready().then(() => {


      SplashScreen.hide();

      if(this.platform.is('mobileweb') == false) {
        //alert('in');
        
        var notificationOpenedCallback = function(jsonData) {
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window["plugins"].OneSignal
          .startInit("2ecb5a90-b48c-4bef-92fc-c4aaf03e74e6", "dday-8822d")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit();

        
          window["plugins"].OneSignal.getPermissionSubscriptionState(function(status) {
            //alert(status.subscriptionStatus.subscribed + " " + status.subscriptionStatus.userSubscriptionSetting);
          if(status.subscriptionStatus.subscribed == true && status.subscriptionStatus.userSubscriptionSetting == true) {
            window["plugins"].OneSignal.setSubscription(true);
          }

          });
      }

    });
  }

  openLink(link) {
    this.browser.create(link, "_system", this.options);
  }
}
