import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas'

@Injectable()
export class ListaDeseosService {

  listas : Lista[] = [];
  constructor() {
    let lista1 = new Lista('compras')
    let lista2 = new Lista('videoJuegos')
    let lista3 = new Lista('trabajos')

    this.listas.push(lista1,lista2,lista3);
  }
}
