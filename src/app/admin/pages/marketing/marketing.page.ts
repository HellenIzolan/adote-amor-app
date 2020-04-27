import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Marketing } from '../../models/marketing.model';
import { MarketingService } from '../../services/marketing.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss']
})
export class MarketingPage {
  marketing$: Observable<Marketing[]>;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private marketingService: MarketingService
  ) {}

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();
    this.marketing$ = this.marketingService.getAll();
    this.marketing$.pipe(take(1)).subscribe(marketing => loading.dismiss());
  }

  onUpdate(marketing: Marketing): void {
    //this.navCtrl.navigateBack(`/admin/marketing/edit/${marketing.id}`);
    this.navCtrl.navigateBack(['admin', 'marketing', 'edit', marketing.id]);
  }

  async onDelete(marketing: Marketing): Promise<void> {
    await this.overlayService.alert({
      header: 'Atenção!',
      message: `Excluir marketing "${marketing.titulo}"?`,
      buttons: [
        {
          text: 'Sim',
          handler: async () => {
            await this.marketingService.delete(marketing);
            await this.overlayService.alert({
              message: `Marketing "${marketing.titulo}" deletado!`,
              buttons: ['Ok']
            });
          }
        },
        'Não'
      ]
    });
  }
}
