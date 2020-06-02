import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Conta } from '../../models/conta.model';
import { ContasService } from '../../services/contas.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss']
})
export class ContasPage {
  contas$: Observable<Conta[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private contasService: ContasService
  ) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.contas$ = this.contasService.getAll();
    this.contas$.pipe(take(1)).subscribe(contas => loading.dismiss());
  }

  onUpdate(conta: Conta): void {
    //this.navCtrl.navigateBack(`/admin/contas/edit/${conta.id}`);
    this.navCtrl.navigateBack(['admin', 'contas', 'edit', conta.id]);
  }

  async onDelete(conta: Conta): Promise<void> {
    await this.overlayService.alert({
      header: 'Atenção!',
      message: `Excluir conta "${conta.titulo}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.contasService.delete(conta);
            await this.overlayService.alert({
              message: `Conta "${conta.titulo}" deletada!`,
              buttons: ['Ok']
            });
          }
        },
        'Não'
      ]
    });
  }
}
