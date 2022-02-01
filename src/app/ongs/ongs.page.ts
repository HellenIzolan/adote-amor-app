import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Dados } from './models/dados.model';
import { DadosService } from './services/dados.service';
import { OverlayService } from '../../../src/app/core/services/overlay.service'
import { NavController } from '@ionic/angular';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ongs',
  templateUrl: 'ongs.page.html',
  styleUrls: ['ongs.page.scss']
})
export class OngsPage {
  adocoes$: any;
  contas$: any;
  conteudos$: any;
  dados$: any;
  marketing$: any;
  telefones$: any;
  id: any;
  dadosId: Dados[];
  url_site: string = undefined;
  linkadocoes$: string;
  linkprojetos$: string;
  linkajuda$: string;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private dadosService: DadosService,
    private route: ActivatedRoute,
  ) { }

  ionViewWillEnter(): void {
    const url_site: string = this.route.snapshot.paramMap.get('url_site');
    this.dadosService.getDados(url_site).subscribe(res => {
      this.dadosId = res;
      this.id = this.dadosId[0].id;
      console.log(this.id);

      this.adocoes$ = this.dadosService.getAdocoesList(this.id);
      this.contas$ = this.dadosService.getContasList(this.id);
      this.conteudos$ = this.dadosService.getConteudosList(this.id);
      this.marketing$ = this.dadosService.getMarketingList(this.id);
      this.telefones$ = this.dadosService.getTelefonesList(this.id);
      this.linkadocoes$ = (`/ongs/${url_site}#adocoes`);
      this.linkprojetos$ = (`/ongs/${url_site}#projetos`);
      this.linkajuda$ = (`/ongs/${url_site}#ajuda`);
    });

  }
  
  async ionViewDidEnter(): Promise<void>  {
    const loading = await this.overlayService.loading();
    const url_site = this.route.snapshot.paramMap.get('url_site');
    this.dados$ = this.dadosService.getDadosList(url_site);
    this.dados$.pipe(take(1)).subscribe(dados => loading.dismiss());
  }
}
