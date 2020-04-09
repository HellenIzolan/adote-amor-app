import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    //canActivateChild: [AuthGuard],
    children: [
      {
        path: 'popups/create',
        loadChildren: './pages/popups-save/popups-save.module#PopupsSavePageModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'popups/edit/:id',
        loadChildren: './pages/popups-save/popups-save.module#PopupsSavePageModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'popups',
        loadChildren: './pages/popups/popups.module#PopupsPageModule',
        canLoad: [AuthGuard]
      },
      {
        path: 'dados',
        loadChildren: './pages/dados/dados.module#DadosPageModule',
        canLoad: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
