import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';
import { NavController , AlertController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component({
  selector : 'page-pendientes',
  templateUrl : 'pendientes.component.html'
})

export class PendientesPage {
  constructor(
    public _deseosService : DeseosService,
    private _navCtrl : NavController,
    private _alertCtrl : AlertController
  ){

  }

  AgregarLista(){
    const alerta = this._alertCtrl.create({
      title : "Nueva lista",
      message : "Ingrese el nombre de la nueva lista",
      inputs : [{name:"titulo",placeholder:"nombre de lista"}],
      buttons: [
        {text : "Cancelar"},
        {text : "Agregar", handler : data => {
          if(data.titulo.trim().length === 0) return;
            this._navCtrl.push( AgregarPage,{ item : new Lista(data.titulo), crear: true} );
          }
        }
      ]
    });

    alerta.present();
    //this._navCtrl.push( AgregarPage );
  }
}
