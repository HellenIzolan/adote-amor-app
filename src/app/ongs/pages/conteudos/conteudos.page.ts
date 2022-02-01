import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { OverlayService } from 'src/app/core/services/overlay.service';
import { Conteudo } from '../../models/conteudo.model';
import { Dados } from '../../models/dados.model';
import { ConteudosService } from '../../services/conteudos.service';
import { DadosService } from '../../services/dados.service';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.page.html',
  styleUrls: ['./conteudos.page.scss']
})
export class ConteudosPage {
  //public dados$: any;
  conteudos$: any;
  //ongId: any;
  slug: string = undefined;
  dados: Dados[];
  id : any;

  constructor(
    private navCtrl: NavController,
    private conteudosService: ConteudosService,
    private overlayService: OverlayService,
    private dadosService: DadosService,
    private route: ActivatedRoute,
  ) {}

  ionViewWillEnter(): void {
    const slug: string = this.route.snapshot.paramMap.get('slug');
    this.dadosService.getDados(slug).subscribe(res => {
      this.dados = res;
      this.id = this.dados[0].id;
      console.log(this.id);
      this.conteudos$ = this.dadosService.getConteudosList(this.id);  
      
    });
  }

  /*async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();

    const slug: string = this.route.snapshot.paramMap.get('slug');

    this.dados$ = this.dadosService.getDadosList(slug);
    
    /*var ongId;
    this.dados$.forEach(function(item){
      console.log(item[0].id);     
    });*/

    /*this.ongId = 'WooSTWgkz3M2aR0NSZSlGqq6nek2';

    this.conteudos$ = this.dadosService.getConteudosList(this.ongId);  

    this.conteudos$.pipe(take(1)).subscribe(conteudos => loading.dismiss());
  }*/
}
