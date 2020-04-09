import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Popup } from '../../models/popup.model';
import { PopupsService } from '../../services/popups.service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.page.html',
  styleUrls: ['./popups.page.scss']
})
export class PopupsPage {
  popups$: Observable<Popup[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private popupsService: PopupsService
  ) {}

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.popups$ = this.popupsService.getAll();
    this.popups$.pipe(take(1)).subscribe(popups => loading.dismiss());
  }

  onUpdate(popup: Popup): void {
    //this.navCtrl.navigateBack(`/admin/popups/edit/${popup.id}`);
    this.navCtrl.navigateBack(['admin', 'popups', 'edit', popup.id]);
  }

  async onDelete(popup: Popup): Promise<void> {
    await this.overlayService.alert({
      header: 'Atenção!',
      message: `Excluir pop-up "${popup.titulo}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.popupsService.delete(popup);
            await this.overlayService.alert({
              message: `Pop-up "${popup.titulo}" deletado!`,
              buttons: ['Ok']
            });
          }
        },
        'Não'
      ]
    });
  }

  async onAtivo(popup: Popup): Promise<void> {
    const popupToUpdate = { ...popup, ativo: !popup.ativo };
    await this.popupsService.update(popupToUpdate);
    await this.overlayService.toast({
      message: `Pop-up "${popup.titulo}" ${popupToUpdate.ativo ? 'ativado' : 'desativado'}!`,
      buttons: ['Ok'],
      position: 'middle'
    });
  }
}
