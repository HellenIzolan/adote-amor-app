import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Adocao } from '../../models/adocao.model';
import { AdocoesService } from '../../services/adocoes.service';

@Component({
  selector: 'app-adocoes',
  templateUrl: './adocoes.page.html',
  styleUrls: ['./adocoes.page.scss']
})
export class AdocoesPage {
  adocoes$: Observable<Adocao[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private adocoesService: AdocoesService
  ) {}

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.adocoes$ = this.adocoesService.getAll();
    this.adocoes$.pipe(take(1)).subscribe(adocoes => loading.dismiss());
  }

  onUpdate(adocao: Adocao): void {
    //this.navCtrl.navigateBack(`/admin/adocoes/edit/${adocao.id}`);
    this.navCtrl.navigateBack(['admin', 'adocoes', 'edit', adocao.id]);
  }

  async onDelete(adocao: Adocao): Promise<void> {
    await this.overlayService.alert({
      header: 'Atenção!',
      message: `Excluir animal "${adocao.nome}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.adocoesService.delete(adocao);
            await this.overlayService.alert({
              message: `Animal "${adocao.nome}" deletado!`,
              buttons: ['Ok']
            });
          }
        },
        'Não'
      ]
    });
  }

  async onAtivo(adocao: Adocao): Promise<void> {
    const adocaoToUpdate = { ...adocao, ativo: !adocao.ativo };
    await this.adocoesService.update(adocaoToUpdate);
    await this.overlayService.toast({
      message: `Animal "${adocao.nome}" ${adocaoToUpdate.ativo ? 'ativado' : 'desativado'}!`,
      buttons: ['Ok'],
      position: 'middle'
    });
  }
}
