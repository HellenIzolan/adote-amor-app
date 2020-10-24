import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { DadosService } from '../../services/dados.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-dados-save',
  templateUrl: './dados-save.page.html',
  styleUrls: ['./dados-save.page.scss'],
})
export class DadosSavePage implements OnInit {
  dadosForm: FormGroup;
  pageTitle = '...';
  dadosId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private dadosService: DadosService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const dadosId = this.route.snapshot.paramMap.get('id');
    if (!dadosId) {
      this.pageTitle = 'Inserir Dados';
      return;
    }
    this.dadosId = dadosId;
    this.pageTitle = 'Editar Dados';
    this.dadosService
      .get(dadosId)
      .pipe(take(1))
      .subscribe(
        ({
          razao_social,
          fantasia,
          cnpj,
          email_principal,
          email_newsletter,
          rua,
          numero,
          complemento,
          bairro,
          cep,
          cidade,
          estado,
          url_site
        }) => {
          this.dadosForm.get('razao_social').setValue(razao_social);
          this.dadosForm.get('fantasia').setValue(fantasia);
          this.dadosForm.get('cnpj').setValue(cnpj);
          this.dadosForm.get('email_principal').setValue(email_principal);
          this.dadosForm.get('email_newsletter').setValue(email_newsletter);
          this.dadosForm.get('rua').setValue(rua);
          this.dadosForm.get('numero').setValue(numero);
          this.dadosForm.get('complemento').setValue(complemento);
          this.dadosForm.get('bairro').setValue(bairro);
          this.dadosForm.get('cep').setValue(cep);
          this.dadosForm.get('cidade').setValue(cidade);
          this.dadosForm.get('estado').setValue(estado);
          this.dadosForm.get('url_site').setValue(url_site);
        }
      );
  }

  private createForm(): void {
    this.dadosForm = this.fb.group({
      razao_social: ['', [Validators.required, Validators.minLength(3)]],
      fantasia: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.minLength(18)]],
      email_principal: ['', [Validators.required, Validators.email]],
      email_newsletter: ['', [Validators.required, Validators.email]],
      rua: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required]],
      complemento: [''],
      bairro: ['', [Validators.required, Validators.minLength(3)]],
      cep: ['', [Validators.required, Validators.minLength(8)]],
      cidade: ['', [Validators.required, Validators.minLength(3)]],
      estado: ['', [Validators.required, Validators.minLength(2)]],
      url_site: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get razao_social(): FormControl {
    return <FormControl>this.dadosForm.get('razao_social');
  }

  get fantasia(): FormControl {
    return <FormControl>this.dadosForm.get('fantasia');
  }

  get cnpj(): FormControl {
    return <FormControl>this.dadosForm.get('cnpj');
  }

  get email_principal(): FormControl {
    return <FormControl>this.dadosForm.get('email_principal');
  }

  get email_newsletter(): FormControl {
    return <FormControl>this.dadosForm.get('email_newsletter');
  }

  get rua(): FormControl {
    return <FormControl>this.dadosForm.get('rua');
  }

  get numero(): FormControl {
    return <FormControl>this.dadosForm.get('numero');
  }

  get complemento(): FormControl {
    return <FormControl>this.dadosForm.get('complemento');
  }

  get bairro(): FormControl {
    return <FormControl>this.dadosForm.get('bairro');
  }

  get cep(): FormControl {
    return <FormControl>this.dadosForm.get('cep');
  }

  get cidade(): FormControl {
    return <FormControl>this.dadosForm.get('cidade');
  }

  get estado(): FormControl {
    return <FormControl>this.dadosForm.get('estado');
  }

  get url_site(): FormControl{
    return <FormControl>this.dadosForm.get('url_site');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const dados = !this.dadosId
        ? await this.dadosService.create(this.dadosForm.value)
        : await this.dadosService.update({
          id: this.dadosId,
          ...this.dadosForm.value
        });
      this.navCtrl.navigateBack('/admin/dados');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
