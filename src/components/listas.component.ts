import { Component, Input } from '@angular/core';
import { DeseosService } from '../services/deseos.service';
import { NavController } from 'ionic-angular';
import { Lista } from '../models';
import { AgregarPage } from '../pages/agregar/agregar.component';


@Component({
  selector : 'app-listas',
  templateUrl : 'listas.component.html'
})

export class ListasComponent {

  @Input() terminada: boolean = false;
  
  constructor(public _deseosService : DeseosService,public  _navCtrl : NavController){
  }

  ListaSeleccionada( item:Lista){
    this._navCtrl.push( AgregarPage, { item : item, crear: false })
  }



  EliminarLista(lista : Lista){
    this._deseosService.EliminarLista(lista);
  }
}
