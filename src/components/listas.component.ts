import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { NavController , AlertController, ItemSliding } from 'ionic-angular';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';


@Component({
  selector : 'app-listas',
  templateUrl : 'listas.component.html'
})

export class ListasComponent {

  @Input() terminada: boolean = false;

  constructor(public _deseosService : DeseosService,public  _navCtrl : NavController, private _alertCtrl : AlertController){
  }

  ListaSeleccionada( item:Lista){
    this._navCtrl.push( AgregarPage, { item : item, crear: false })
  }

  EditarLista ( lista : Lista, slideItem : ItemSliding){
    slideItem.close();
    const alerta = this._alertCtrl.create({
      title : "Editar nombre",
      message : "Editar nombre de la lista",
      inputs : [{
        name:"titulo",
        placeholder:"nombre de lista",
        value : lista.titulo
      }],
      buttons: [
        {text : "Cancelar"},
        {text : "Guardar", handler : data => {
          if(data.titulo.trim().length === 0) return;
            lista.titulo = data.titulo;
            this._deseosService.GuardarStorage()
          }
        }
      ]
    });

    alerta.present();
  }

  EliminarLista(lista : Lista){
    this._deseosService.EliminarLista(lista);
  }
}
