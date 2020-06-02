import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { take } from 'rxjs/operators';

import { MarketingService } from '../../services/marketing.service';
import { OverlayService } from 'src/app/core/services/overlay.service';

@Component({
  selector: 'app-marketing-save',
  templateUrl: './marketing-save.page.html',
  styleUrls: ['./marketing-save.page.scss']
})
export class MarketingSavePage implements OnInit {
  marketingForm: FormGroup;
  pageTitle = '...';
  marketingId: string = undefined;

  constructor(
    private fb: FormBuilder,
    private navCtrl: NavController,
    private overlayService: OverlayService,
    private route: ActivatedRoute,
    private marketingService: MarketingService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.init();
  }

  init(): void {
    const marketingId = this.route.snapshot.paramMap.get('id');
    if (!marketingId) {
      this.pageTitle = 'Criar Marketing';
      return;
    }
    this.marketingId = marketingId;
    this.pageTitle = 'Editar Marketing';
    this.marketingService
      .get(marketingId)
      .pipe(take(1))
      .subscribe(({ titulo, link }) => {
        this.marketingForm.get('titulo').setValue(titulo);
        this.marketingForm.get('link').setValue(link);
      });
  }

  private createForm(): void {
    this.marketingForm = this.fb.group({
      titulo: ['', [Validators.required]],
      link: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get titulo(): FormControl {
    return <FormControl>this.marketingForm.get('titulo');
  }

  get link(): FormControl {
    return <FormControl>this.marketingForm.get('link');
  }

  async onSubmit(): Promise<void> {
    const loading = await this.overlayService.loading({
      message: 'Salvando...'
    });
    try {
      const marketing = !this.marketingId
        ? await this.marketingService.create(this.marketingForm.value)
        : await this.marketingService.update({
            id: this.marketingId,
            ...this.marketingForm.value
          });
      this.navCtrl.navigateBack('/admin/marketing');
    } catch (error) {
      await this.overlayService.alert({
        message: error.message
      });
    } finally {
      loading.dismiss();
    }
  }
}
