import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LayoutComponent } from './layout/layout/layout.component';

// import { PageDetailComponent } from './modules/courses/pages/page-detail/page-detail.component';


const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    component: LayoutComponent,
    loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'videotour',
    component: LayoutComponent,
    loadChildren: () => import('./modules/video-tour/video-tour.module').then(m => m.VideoTourModule)
  },
  {
    path: 'services',
    component: LayoutComponent,
    loadChildren: () => import('./modules/services/services.module').then(m => m.ServicesModule)
  },
  {
    path: 'destination',
    component: LayoutComponent,
    loadChildren: () => import('./modules/destination/destination.module').then(m => m.DestinationModule)
  },
  {
    path: 'contact',
    component: LayoutComponent,
    loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
  },
  // {
  //   path: 'page/:id',
  //   component: PageDetailComponent
  // },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
