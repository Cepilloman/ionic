import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas'

@Injectable()
export class ListaDeseosService {

  listas : Lista[] = [];
  constructor() {
    this.CargarData();
  }


  ActualizarData(){
    localStorage.setItem("data",JSON.stringify(this.listas));
  }

  CargarData(){
    if(localStorage.getItem("data"))
      this.listas = JSON.parse(localStorage.getItem("data"));
  }

  AgregarLista(lista : Lista){
    this.listas.push(lista);
    this.ActualizarData();
  }
}
