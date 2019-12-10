import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },

    {
      title: 'Correo',
      url: '/correo',
      icon: 'mail'
    },
    {
      title: 'CFE',
      url: '/cfe',
      icon: 'document'
    },
    {
      title: 'CURP',
      url: '/curp',
      icon: 'flash'
    },
    {
      title: 'Acta De Nacimiento',
      url: '/acta-nacimiento',
      icon: 'paper'
    },
    {
      title: 'Acerca de',
      url: '/acerca-de',
      icon: 'information-circle-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
