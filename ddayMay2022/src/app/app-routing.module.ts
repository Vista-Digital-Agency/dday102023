import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'at-memorial-modal',
    loadChildren: () => import('./at-memorial-modal/at-memorial-modal.module').then( m => m.AtMemorialModalPageModule)
  },
  {
    path: 'bedford-boys-modal',
    loadChildren: () => import('./bedford-boys-modal/bedford-boys-modal.module').then( m => m.BedfordBoysModalPageModule)
  },
  {
    path: 'brick',
    loadChildren: () => import('./brick/brick.module').then( m => m.BrickPageModule)
  },
  {
    path: 'brick-search-modal',
    loadChildren: () => import('./brick-search-modal/brick-search-modal.module').then( m => m.BrickSearchModalPageModule)
  },
  {
    path: 'cherry-trees',
    loadChildren: () => import('./cherry-trees/cherry-trees.module').then( m => m.CherryTreesPageModule)
  },
  {
    path: 'cherry-trees-search-modal',
    loadChildren: () => import('./cherry-trees-search-modal/cherry-trees-search-modal.module').then( m => m.CherryTreesSearchModalPageModule)
  },
  {
    path: 'dday-today-modal',
    loadChildren: () => import('./dday-today-modal/dday-today-modal.module').then( m => m.DdayTodayModalPageModule)
  },
  {
    path: 'event-modal',
    loadChildren: () => import('./event-modal/event-modal.module').then( m => m.EventModalPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'general-info-modal',
    loadChildren: () => import('./general-info-modal/general-info-modal.module').then( m => m.GeneralInfoModalPageModule)
  },
  {
    path: 'group-modal',
    loadChildren: () => import('./group-modal/group-modal.module').then( m => m.GroupModalPageModule)
  },
  {
    path: 'homefront-tour',
    loadChildren: () => import('./homefront-tour/homefront-tour.module').then( m => m.HomefrontTourPageModule)
  },
  {
    path: 'homefront-tour-slides',
    loadChildren: () => import('./homefront-tour-slides/homefront-tour-slides.module').then( m => m.HomefrontTourSlidesPageModule)
  },
  {
    path: 'hours-modal',
    loadChildren: () => import('./hours-modal/hours-modal.module').then( m => m.HoursModalPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'memorial-search-modal',
    loadChildren: () => import('./memorial-search-modal/memorial-search-modal.module').then( m => m.MemorialSearchModalPageModule)
  },
  {
    path: 'partners',
    loadChildren: () => import('./partners/partners.module').then( m => m.PartnersPageModule)
  },
  {
    path: 'special-openings-modal',
    loadChildren: () => import('./special-openings-modal/special-openings-modal.module').then( m => m.SpecialOpeningsModalPageModule)
  },
  {
    path: 'support-modal',
    loadChildren: () => import('./support-modal/support-modal.module').then( m => m.SupportModalPageModule)
  },
  {
    path: 'tickets-modal',
    loadChildren: () => import('./tickets-modal/tickets-modal.module').then( m => m.TicketsModalPageModule)
  },
  {
    path: 'visiting',
    loadChildren: () => import('./visiting/visiting.module').then( m => m.VisitingPageModule)
  },
  {
    path: 'wall',
    loadChildren: () => import('./wall/wall.module').then( m => m.WallPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'welcome-modal',
    loadChildren: () => import('./welcome-modal/welcome-modal.module').then( m => m.WelcomeModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
