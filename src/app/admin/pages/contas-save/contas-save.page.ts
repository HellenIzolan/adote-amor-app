import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { ContasService } from '../../services/contas.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-contas-save',
  templateUrl: './contas-save.page.html',
  styleUrls: ['./contas-save.page.scss']
})
export class ContasSavePage implements OnInit {
  contaForm: FormGroup;
  pageTitle = '...';
  contaId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private contasService: ContasService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const contaId = this.route.snapshot.paramMap.get('id');
    if (!contaId) {
      this.pageTitle = 'Criar Conta';
      return;
    }
    this.contaId = contaId;
    this.pageTitle = 'Editar Conta';
    this.contasService
      .get(contaId)
      .pipe(take(1))
      .subscribe(({ titulo, agencia, operacao, numero }) => {
        this.contaForm.get('titulo').setValue(titulo);
        this.contaForm.get('agencia').setValue(agencia);
        this.contaForm.get('operacao').setValue(operacao);
        this.contaForm.get('numero').setValue(numero);
      });
  }

  private createForm(): void {
    this.contaForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      agencia: ['', [Validators.required]],
      operacao: ['', [Validators.required]],
      numero: ['', [Validators.required]]
    });
  }

  get titulo(): FormControl {
    return <FormControl>this.contaForm.get('titulo');
  }

  get agencia(): FormControl {
    return <FormControl>this.contaForm.get('agencia');
  }

  get operacao(): FormControl {
    return <FormControl>this.contaForm.get('operacao');
  }

  get numero(): FormControl {
    return <FormControl>this.contaForm.get('numero');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const conta = !this.contaId
        ? await this.contasService.create(this.contaForm.value)
        : await this.contasService.update({
          id: this.contaId,
          ...this.contaForm.value
        });
      this.navCtrl.navigateBack('/admin/contas');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
