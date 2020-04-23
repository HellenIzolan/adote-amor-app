import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { PopupsService } from '../../services/popups.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-popups-save',
  templateUrl: './popups-save.page.html',
  styleUrls: ['./popups-save.page.scss']
})
export class PopupsSavePage implements OnInit {
  popupForm: FormGroup;
  pageTitle = '...';
  popupId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private popupsService: PopupsService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const popupId = this.route.snapshot.paramMap.get('id');
    if (!popupId) {
      this.pageTitle = 'Criar Pop-up';
      return;
    }
    this.popupId = popupId;
    this.pageTitle = 'Editar Pop-up';
    this.popupsService
      .get(popupId)
      .pipe(take(1))
      .subscribe(({ titulo, imagem, ativo }) => {
        this.popupForm.get('titulo').setValue(titulo);
        this.popupForm.get('imagem').setValue(imagem);
        this.popupForm.get('ativo').setValue(ativo);
      });
  }

  private createForm(): void {
    this.popupForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      imagem: ['', [Validators.required, Validators.minLength(3)]],
      ativo: [false]
    });
  }

  get titulo(): FormControl {
    return <FormControl>this.popupForm.get('titulo');
  }

  get imagem(): FormControl {
    return <FormControl>this.popupForm.get('imagem');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const popup = !this.popupId
        ? await this.popupsService.create(this.popupForm.value)
        : await this.popupsService.update({
            id: this.popupId,
            ...this.popupForm.value
          });
      this.navCtrl.navigateBack('/admin/popups');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
