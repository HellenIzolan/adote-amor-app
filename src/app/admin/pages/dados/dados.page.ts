import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Dados } from '../../models/dados.model';
import { DadosService } from '../../services/dados.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss']
})
export class DadosPage {
  dados$: Observable<Dados[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private dadosService: DadosService
  ) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.dados$ = this.dadosService.getAll();
    this.dados$.pipe(take(1)).subscribe(dados => loading.dismiss());
  }

  onUpdate(dados: Dados): void {
    //this.navCtrl.navigateBack(`/admin/dados/edit/${dado.id}`);
    this.navCtrl.navigateBack(['admin', 'dados', 'edit', dados.id]);
  }
}
