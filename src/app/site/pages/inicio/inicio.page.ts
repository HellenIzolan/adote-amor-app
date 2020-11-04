import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuController, NavController } from '@ionic/angular';

import { Telefone } from '../../../admin/models/telefone.model';
import { SiteService } from '../../services/site.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage{
  telefones$: Observable<Telefone[]>;
  
  constructor(
    public menuCtrl: MenuController,
    private overlayService: OverlayService,
    private siteService: SiteService)
    {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  async ionViewDidEnter(): Promise<void> {
    this.telefones$ = this.siteService.getAll();
  }
}
