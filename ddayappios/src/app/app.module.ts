import { BrowserModule } from '@angular/platform-browser';

import { NgCalendarModule  } from 'ionic2-calendar';
import { PinchZoomModule } from 'ngx-pinch-zoom';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesModule } from '../pipes/pipes.module';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { Calendar } from '@ionic-native/calendar';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Geolocation } from '@ionic-native/geolocation';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HTTP } from '@ionic-native/http';

import { AboutPageModule } from '../pages/about/about.module';
import { BrickPageModule } from '../pages/brick/brick.module';
import { BrickSearchModalPageModule } from '../pages/brick-search-modal/brick-search-modal.module';
import { EventsPageModule } from '../pages/events/events.module';
import { MapPageModule } from '../pages/map/map.module';
import { VisitingPageModule } from '../pages/visiting/visiting.module';
import { WallPageModule } from '../pages/wall/wall.module';
import { FaqPageModule } from '../pages/faq/faq.module';
import { InfoPageModule } from '../pages/info/info.module';
import { MemorialSearchModalPageModule } from '../pages/memorial-search-modal/memorial-search-modal.module';
import { EventModalPageModule } from '../pages/event-modal/event-modal.module';
import { TicketsModalPageModule } from '../pages/tickets-modal/tickets-modal.module';
import { GroupModalPageModule } from '../pages/group-modal/group-modal.module';
import { HoursModalPageModule } from '../pages/hours-modal/hours-modal.module';
import { SpecialOpeningsModalPageModule } from '../pages/special-openings-modal/special-openings-modal.module';
import { GeneralInfoModalPageModule } from '../pages/general-info-modal/general-info-modal.module';
import { WelcomeModalPageModule } from '../pages/welcome-modal/welcome-modal.module';
import { BedfordBoysModalPageModule } from '../pages/bedford-boys-modal/bedford-boys-modal.module';
import { DdayTodayModalPageModule } from '../pages/dday-today-modal/dday-today-modal.module';
import { AtMemorialModalPageModule } from '../pages/at-memorial-modal/at-memorial-modal.module';
import { SupportModalPageModule } from '../pages/support-modal/support-modal.module';
import { PartnersPageModule } from '../pages/partners/partners.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { HomefrontTourPageModule } from '../pages/homefront-tour/homefront-tour.module';
import { HomefrontTourSlidesPageModule } from '../pages/homefront-tour-slides/homefront-tour-slides.module';

import { MemorialSearchProvider } from '../providers/memorial-search/memorial-search';
import { EventsProvider } from '../providers/events/events';
import { MarkersProvider } from '../providers/markers/markers';
import { CherryTreesPageModule } from '../pages/cherry-trees/cherry-trees.module';
import { CherryTreesSearchModalPageModule } from '../pages/cherry-trees-search-modal/cherry-trees-search-modal.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    PinchZoomModule,
    NgCalendarModule,
    HttpClientModule,
    NgbModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      backButtonIcon: "ios-arrow-back",
      mode: 'ios'
    }),
    PipesModule,
    AboutPageModule,
    BrickPageModule,
    BrickSearchModalPageModule,
    EventsPageModule,
    MapPageModule,
    VisitingPageModule,
    WallPageModule,
    FaqPageModule,
    InfoPageModule,
    MemorialSearchModalPageModule,
    EventModalPageModule,
    TicketsModalPageModule,
    GroupModalPageModule,
    HoursModalPageModule,
    SpecialOpeningsModalPageModule,
    GeneralInfoModalPageModule,
    WelcomeModalPageModule,
    BedfordBoysModalPageModule,
    DdayTodayModalPageModule,
    AtMemorialModalPageModule,
    SupportModalPageModule,
    PartnersPageModule,
    WelcomePageModule,
    HomefrontTourPageModule,
    HomefrontTourSlidesPageModule,
    CherryTreesPageModule,
    CherryTreesSearchModalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    //StatusBar,
    //SplashScreen,
    HTTP,
    Calendar,
    InAppBrowser,
    Geolocation,
    MobileAccessibility,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MemorialSearchProvider,
    EventsProvider,
    MarkersProvider
  ]
})
export class AppModule {}
