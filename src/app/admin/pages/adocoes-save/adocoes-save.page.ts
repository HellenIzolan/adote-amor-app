import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { AdocoesService } from '../../services/adocoes.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-adocoes-save',
  templateUrl: './adocoes-save.page.html',
  styleUrls: ['./adocoes-save.page.scss']
})
export class AdocoesSavePage implements OnInit {
  adocaoForm: FormGroup;
  pageTitle = '...';
  adocaoId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private adocoesService: AdocoesService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const adocaoId = this.route.snapshot.paramMap.get('id');
    if (!adocaoId) {
      this.pageTitle = 'Criar Animal';
      return;
    }
    this.adocaoId = adocaoId;
    this.pageTitle = 'Editar Animal';
    this.adocoesService
      .get(adocaoId)
      .pipe(take(1))
      .subscribe(({ nome, sobre, imagem, ativo }) => {
        this.adocaoForm.get('nome').setValue(nome);
        this.adocaoForm.get('sobre').setValue(sobre);
        this.adocaoForm.get('imagem').setValue(imagem);
        this.adocaoForm.get('ativo').setValue(ativo);
      });
  }

  private createForm(): void {
    this.adocaoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobre: ['', [Validators.required, Validators.minLength(3)]],
      imagem: ['', [Validators.required, Validators.minLength(3)]],
      ativo: [false]
    });
  }

  get nome(): FormControl {
    return <FormControl>this.adocaoForm.get('nome');
  }

  get sobre(): FormControl {
    return <FormControl>this.adocaoForm.get('sobre');
  }

  get imagem(): FormControl {
    return <FormControl>this.adocaoForm.get('imagem');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const adocao = !this.adocaoId
        ? await this.adocoesService.create(this.adocaoForm.value)
        : await this.adocoesService.update({
            id: this.adocaoId,
            ...this.adocaoForm.value
          });
      this.navCtrl.navigateBack('/admin/adocoes');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
