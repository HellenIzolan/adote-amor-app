import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Telefone } from '../../models/telefone.model';
import { TelefonesService } from '../../services/telefones.service';

@Component({
  selector: 'app-telefones',
  templateUrl: './telefones.page.html',
  styleUrls: ['./telefones.page.scss']
})
export class TelefonesPage{
  telefones$: Observable<Telefone[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private telefonesService: TelefonesService
  ) {}

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.telefones$ = this.telefonesService.getAll();
    this.telefones$.pipe(take(1)).subscribe(telefones => loading.dismiss());
  }

  onUpdate(telefone: Telefone): void {
    //this.navCtrl.navigateBack(`/admin/telefones/edit/${telefone.id}`);
    this.navCtrl.navigateBack(['admin', 'telefones', 'edit', telefone.id]);
  }

  async onDelete(telefone: Telefone): Promise<void> {
    await this.overlayService.alert({
      header: 'Atenção!',
      message: `Excluir telefone "${telefone.titulo}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.telefonesService.delete(telefone);
            await this.overlayService.alert({
              message: `Telefone"${telefone.titulo}" deletado!`,
              buttons: ['Ok']
            });
          }
        },
        'Não'
      ]
    });
  }
}
