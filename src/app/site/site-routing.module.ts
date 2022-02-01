import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SitePage } from './site.page';

const routes: Routes = [
  {
    path: 'site',
    component: SitePage,
    //canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        //loadChildren: './pages/home/home.module#HomePageModule',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
        //canLoad: [AuthGuard]
      },
      {
        path: 'politica-de-privacidade',
        //loadChildren: './pages/politica-de-privacidade/politica-de-privacidade.module#PoliticaDePrivacidadePageModule',
        loadChildren: () => import('./pages/politica-de-privacidade/politica-de-privacidade.module').then(m => m.PoliticaDePrivacidadePageModule)
        //canLoad: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/site/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/site/home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule {}
