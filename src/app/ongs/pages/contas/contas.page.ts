import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Conta } from '../../models/conta.model';
import { Dados } from '../../models/dados.model';
import { Marketing } from '../../models/marketing.model';
import { Telefone } from '../../models/telefone.model';
import { ContasService } from '../../services/contas.service';
import { DadosService } from '../../services/dados.service';
import { MarketingService } from '../../services/marketing.service';
import { TelefonesService } from '../../services/telefones.service';

@Component({
  selector: 'app-contas',
  templateUrl: './contas.page.html',
  styleUrls: ['./contas.page.scss']
})
export class ContasPage {
  contas$: any;
  //dados$: any;
  marketing$: any;
  telefones$: any;
  //ongId: any;
  slug: string = undefined;
  dados: Dados[];
  id : any;

  constructor(
    private navCtrl: NavController,
    private contasService: ContasService,
    private matketingService: MarketingService,
    private telefonesService: TelefonesService,
    private overlayService: OverlayService,
    private dadosService: DadosService,
    private route: ActivatedRoute,
  ) { }

  ionViewWillEnter(): void {
    const slug: string = this.route.snapshot.paramMap.get('slug');
    this.dadosService.getDados(slug).subscribe(res => {
      this.dados = res;
      this.id = this.dados[0].id;
      console.log(this.id);

      this.contas$ = this.dadosService.getContasList(this.id);

      this.marketing$ = this.dadosService.getMarketingList(this.id);
  
      this.telefones$ = this.dadosService.getTelefonesList(this.id);
      
    });
  }

  /*async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();

    const slug: string = this.route.snapshot.paramMap.get('slug');

    this.dados$ = this.dadosService.getDadosList(slug);

    /*var ongId;
    this.dados$.forEach(function(item){
      ongId = (item[0].id);     
    });*/

    /*sthis.ongId = 'WooSTWgkz3M2aR0NSZSlGqq6nek2';

    this.contas$ = this.dadosService.getContasList(this.ongId);

    this.marketing$ = this.dadosService.getMarketingList(this.ongId);

    this.telefones$ = this.dadosService.getTelefonesList(this.ongId);

    this.telefones$.pipe(take(1)).subscribe(telefones => loading.dismiss());
  }*/
}
