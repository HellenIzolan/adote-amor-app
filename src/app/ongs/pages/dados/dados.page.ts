import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
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
export class DadosPage{
  public dados$: any;
  public telefones$: any;
  //dados$: Observable<Dados[]>;
  slug: string = undefined;

  constructor(
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private dadosService: DadosService,
    private route: ActivatedRoute
  ) { }

  async ionViewDidEnter(): Promise<void> {
    const loading = await this.overlayService.loading();

//    const slug: string = this.route.snapshot.paramMap.get('slug');
    const slug = this.route.snapshot.paramMap.get('slug');
    console.log(slug);
    /*this.dadosService.getDadosgList(dadosId).subscribe(dados => {
      this.dados = dados;
    });*/
    this.dados$ = this.dadosService.getDadosList(slug);

    this.dados$.pipe(take(1)).subscribe(conteudos => loading.dismiss());
  }

}
