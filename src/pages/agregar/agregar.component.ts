import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista, ListaItem } from '../../models';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector : 'page-agregar',
  templateUrl : 'agregar.component.html'
})



export class AgregarPage {

  lista : Lista;
  nombreItem : string = "";
  constructor(public _deseosService : DeseosService, private _navParams : NavParams, public _navController : NavController){
    this.lista = this._navParams.get('item');
    if( this._navParams.get('crear') ) this._deseosService.AgregarLista(this.lista);
  }

  AgregarItem(){
    const nombre = this.nombreItem;
    if(nombre.trim().length === 0) return;
    const nuevoItem = new ListaItem(nombre);
    this.lista.items.push(nuevoItem);
    this.nombreItem = "";
  }

  ActualizarTarea(item : ListaItem){
    item.completado = !item.completado;
    this.FinalizarLista();
  }

  BorrarItem(item : number){
    this.lista.items.splice(item,1);
    this.FinalizarLista();
  }

  GuardarLista(){
    this._deseosService.GuardarStorage();
    this._navController.pop();
  }

  FinalizarLista(){
    const pendientes = this.lista.items.filter( itemData => { return !itemData.completado;}).length;
    if(pendientes === 0){
      this.lista.terminada = true;
      this.lista.terminadaEn = new Date();
    }
    else{
        this.lista.terminada = false;
        this.lista.terminadaEn = null;
    }
  }
}
