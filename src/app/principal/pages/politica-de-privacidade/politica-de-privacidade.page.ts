import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-politica-de-privacidade',
  templateUrl: './politica-de-privacidade.page.html',
  styleUrls: ['./politica-de-privacidade.page.scss'],
})
export class PoliticaDePrivacidadePage implements OnInit {
  constructor(public menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  ngOnInit(): void {}
}
