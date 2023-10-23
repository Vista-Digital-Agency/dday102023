import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MemorialSearchPipe } from './pipe/memorial-search.pipe';
import { OrderNamesPipe } from './pipe/order-names.pipe';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

import { HttpClientModule } from '@angular/common/http';
import { NgCalendarModule  } from 'ionic2-calendar';


@NgModule({
  declarations: [AppComponent, MemorialSearchPipe, OrderNamesPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    NgCalendarModule
  ],
  providers: [
    Calendar,
    InAppBrowser,
    Geolocation,
    { 
      provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
