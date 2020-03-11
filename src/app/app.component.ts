import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dados',
      url: '/admin/admin/dados-ong',
      icon: 'duplicate'
    },
    {
      title: 'Conteúdos',
      url: '/admin/admin/conteudos-ong',
      icon: 'newspaper'
    },
    {
      title: 'Marketing',
      url: '/admin/admin/marketing-ong',
      icon: 'bulb'
    },
    {
      title: 'Pop-Up',
      url: '/admin/admin/popup-ong',
      icon: 'albums'
    },
    {
      title: 'Usuários',
      url: '/admin/admin/usuarios-ong',
      icon: 'people'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
