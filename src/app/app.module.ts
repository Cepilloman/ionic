import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//pages
import { PendientesPage } from '../pages/pendientes/pendientes.component'
import { TerminadosPage } from '../pages/terminados/terminados.component'
import { AgregarPage } from '../pages/agregar/agregar.component'

//services
import { DeseosService } from '../services/deseos.service';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TerminadosPage,
    PendientesPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
