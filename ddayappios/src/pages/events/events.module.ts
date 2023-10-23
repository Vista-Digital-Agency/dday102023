import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { NgCalendarModule } from 'ionic2-calendar/calendar.module';

@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    NgCalendarModule
  ],
})
export class EventsPageModule {}
