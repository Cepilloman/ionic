import { Injectable } from '@angular/core';
import { Lista } from '../models';


@Injectable()
export class DeseosService {

  listas : Lista[] = [];

  constructor() {
    /*const lista1 = new Lista("probando 1")
      const lista2 = new Lista("probando 2")
      this.listas.push(lista1,lista2);*/
      this.CargarStorage();
  }

  AgregarLista(lista : Lista){
    this.listas.push(lista);
    this.GuardarStorage();
  }

  EliminarLista(lista : Lista){
    this.listas = this.listas.filter( listaData => {
      return listaData.id !== lista.id;
    });

    this.GuardarStorage();
  }

  GuardarStorage(){
    localStorage.setItem('data',JSON.stringify( this.listas ));
  }

  CargarStorage(){
    if(localStorage.getItem('data'))
      this.listas = JSON.parse(localStorage.getItem('data'));
    else
      this.listas = [];
  }

}
