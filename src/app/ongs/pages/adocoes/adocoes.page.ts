import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Adocao } from '../../models/adocao.model';
import { Dados } from '../../models/dados.model';
import { AdocoesService } from '../../services/adocoes.service';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-adocoes',
  templateUrl: './adocoes.page.html',
  styleUrls: ['./adocoes.page.scss']
})
export class AdocoesPage {
  public dados$: any;
  public adocoes$: any;
  ongId: any;
  slug: string = undefined;
  dados: Dados[];
  id : any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  
  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private dadosService: DadosService,
    private route: ActivatedRoute
  ) {}

  ionViewWillEnter(): void {
    const slug: string = this.route.snapshot.paramMap.get('slug');
    this.dadosService.getDados(slug).subscribe(res => {
      this.dados = res;
      this.id = this.dados[0].id;
      console.log(this.id);
      this.adocoes$ = this.dadosService.getAdocoesList(this.id ); 
      
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

    /*this.ongId = 'WooSTWgkz3M2aR0NSZSlGqq6nek2';

    this.adocoes$ = this.dadosService.getAdocoesList(this.ongId); 

    this.adocoes$.pipe(take(1)).subscribe(adocoes => loading.dismiss());
  }*/
}
