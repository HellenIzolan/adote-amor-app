import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { ConteudosService } from '../../services/conteudos.service';
import { PhotoService } from '../../services/photo.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-conteudos-save',
  templateUrl: './conteudos-save.page.html',
  styleUrls: ['./conteudos-save.page.scss']
})
export class ConteudosSavePage implements OnInit {
  conteudoForm: FormGroup;
  pageTitle = '...';
  conteudoId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private conteudosService: ConteudosService,
    public photoService: PhotoService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const conteudoId = this.route.snapshot.paramMap.get('id');
    if (!conteudoId) {
      this.pageTitle = 'Criar Conteúdo';
      return;
    }
    this.conteudoId = conteudoId;
    this.pageTitle = 'Editar Conteúdo';
    this.conteudosService
      .get(conteudoId)
      .pipe(take(1))
      .subscribe(({ titulo, descricao, imagem, data }) => {
        this.conteudoForm.get('titulo').setValue(titulo);
        this.conteudoForm.get('descricao').setValue(descricao);
        this.conteudoForm.get('imagem').setValue(imagem);
        this.conteudoForm.get('data').setValue(data);
      });
  }

  private createForm(): void {
    this.conteudoForm = this.fb.group({
      titulo: ['', [Validators.required, Validators.minLength(3)]],
      descricao: ['', [Validators.required, Validators.minLength(10)]],
      imagem: ['', [Validators.required, Validators.minLength(3)]],
      data: ['', [Validators.required]]
    });
  }

  get titulo(): FormControl {
    return <FormControl>this.conteudoForm.get('titulo');
  }

  get descricao(): FormControl {
    return <FormControl>this.conteudoForm.get('descricao');
  }

  get imagem(): FormControl {
    return <FormControl>this.conteudoForm.get('imagem');
  }

  get data(): FormControl {
    return <FormControl>this.conteudoForm.get('data');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const conteudo = !this.conteudoId
        ? await this.conteudosService.create(this.conteudoForm.value)
        : await this.conteudosService.update({
            id: this.conteudoId,
            ...this.conteudoForm.value
          });
      this.navCtrl.navigateBack('/admin/conteudos');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
