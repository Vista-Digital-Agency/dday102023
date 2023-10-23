import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Content } from 'ionic-angular';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowserOptions, InAppBrowser } from '@ionic-native/in-app-browser';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/map/map';
import { EventsPage } from '../pages/events/events';
import { WallPage } from '../pages/wall/wall';
import { BrickPage } from '../pages/brick/brick';
import { FaqPage } from '../pages/faq/faq';
import { InfoPage } from '../pages/info/info';
import { VisitingPage } from '../pages/visiting/visiting';
import { PartnersPage } from '../pages/partners/partners';
import { HomefrontTourPage } from '../pages/homefront-tour/homefront-tour';
import { WelcomePage } from '../pages/welcome/welcome';
import { SupportModalPage } from '../pages/support-modal/support-modal';
import { CherryTreesPage } from '../pages/cherry-trees/cherry-trees';

import { Plugins } from '@capacitor/core';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  options : InAppBrowserOptions = {
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'yes',
    closebuttoncaption : 'Close',
    toolbar : 'yes'
  };

  constructor(public platform: Platform, 
              //public statusBar: StatusBar, 
              //public splashScreen: SplashScreen,
              public mobileAccess: MobileAccessibility, 
              
              public browser: InAppBrowser,
              public screenOrientation: ScreenOrientation) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Visiting', component: VisitingPage },
      { title: 'Map', component: MapPage },
      { title: 'Virtual Guided Tour', component: "" },
      { title: 'Events', component: EventsPage },
      { title: 'Memorial Wall Name Finder', component: WallPage },
      { title: 'Brick Finder', component: BrickPage },
      { title: 'Cherry Tree Finder', component: CherryTreesPage },
      //{ title: 'Narrative Plaque Finder', component: PlaquePage },
      { title: 'Bedford Boys Homefront Tour', component: HomefrontTourPage },
      { title: 'Welcome to Bedford', component: WelcomePage },
      { title: 'Information', component: InfoPage },
      { title: 'Give', component: SupportModalPage },
      { title: 'Partners', component: PartnersPage },
      { title: 'FAQ & Policies', component: FaqPage },
      { title: 'Contact', component: "" },
      { title: 'About', component: AboutPage },
      { title: "Privacy Policy", component: ""}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {

        this.mobileAccess.usePreferredTextZoom(false);
        
        //this.statusBar.backgroundColorByHexString('#2B4453');
        
        /* Android ONLY */
        Plugins.StatusBar.setBackgroundColor({ color: '#2B4453' });
        //this.statusBar.styleBlackTranslucent();


        //this.statusBar.overlaysWebView(false);
        /* Android ONLY */
        Plugins.StatusBar.setOverlaysWebView({ overlay: false });


      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.splashScreen.hide();
      Plugins.SplashScreen.hide();
      
      //alert('in');
      if((this.platform.is('core') || this.platform.is('mobileweb')) == false) {
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

    this.screenOrientation.onChange().subscribe(
      () => {
        setTimeout( () => { 
          this.content.resize();  
          console.log('changed');
        }, 50);
    });
  }

  openContact() {
    this.browser.create("https://www.dday.org/contact-us/", "_system", this.options);
  }

  openPrivacy() {
    this.browser.create("https://www.dday.org/privacy-policy/", "_system", this.options);
  }

  openVirtualTour() {
    this.browser.create("https://www.vamonde.com/adventure/link/1644", "_system", this.options);
  }

  openPage(page) {
    if (page.title == "Contact") {
      this.openContact();
    } else if (page.title == "Privacy Policy") {
      this.openPrivacy();
    } else if (page.title == "Virtual Guided Tour") {
      this.openVirtualTour();
    } else {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    }
  }
}
