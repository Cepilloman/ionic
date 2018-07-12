import { Component, OnInit } from '@angular/core';
import { Lista, ListaItem } from '../../app/clases/index';
import { AlertController, NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html',
})
export class AgregarComponent implements OnInit {

  nombreLista:string = "";
  nombreItem:string = "";

  items:ListaItem[] = [];

  constructor(
    public _alertController:AlertController,
    public _navController:NavController,
    public _listaDeseosService : ListaDeseosService) {

  }

  agregar(){
    if( this.nombreItem.length == 0 )return;

    let item = new ListaItem();
    item.nombre = this.nombreItem;
    this.items.push(item);

    this.nombreItem = "";
  }

  borrar(item:number){
    this.items.splice(item,1);
  }

  GuardarLista(){
    if(this.nombreLista.length == 0){
      let alert = this._alertController.create({
        title : 'Campo obligatorio',
        subTitle : 'El nombre de la lista es obligatorio!',
        buttons : ['OK']
      });
      alert.present();
      return;
    }

    let lista = new Lista(this.nombreLista);
    lista.items = this.items;

    this._listaDeseosService.AgregarLista(lista);

    this._navController.pop();

  }

  ngOnInit() {}
}
