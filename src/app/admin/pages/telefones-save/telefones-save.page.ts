import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import {TelefonesService } from '../../services/telefones.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-telefones-save',
  templateUrl: './telefones-save.page.html',
  styleUrls: ['./telefones-save.page.scss']
})
export class TelefonesSavePage implements OnInit {
  telefoneForm: FormGroup;
  pageTitle = '...';
  telefoneId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private telefonesService: TelefonesService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const telefoneId = this.route.snapshot.paramMap.get('id');
    if (!telefoneId) {
      this.pageTitle = 'Criar Telefone';
      return;
    }
    this.telefoneId = telefoneId;
    this.pageTitle = 'Editar Telefone';
    this.telefonesService
      .get(telefoneId)
      .pipe(take(1))
      .subscribe(({ titulo, numero }) => {
        this.telefoneForm.get('titulo').setValue(titulo);
        this.telefoneForm.get('numero').setValue(numero);
      });
  }

  private createForm(): void {
    this.telefoneForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      numero: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get titulo(): FormControl {
    return <FormControl>this.telefoneForm.get('titulo');
  }

  get numero(): FormControl {
    return <FormControl>this.telefoneForm.get('numero');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const telefone = !this.telefoneId
        ? await this.telefonesService.create(this.telefoneForm.value)
        : await this.telefonesService.update({
          id: this.telefoneId,
          ...this.telefoneForm.value
        });
      this.navCtrl.navigateBack('/admin/telefones');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
