import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from '../../models';

@Component({
  selector : 'page-terminados',
  templateUrl : 'terminados.component.html'
})

export class TerminadosPage {
  listasTerminadas : Lista[];
  constructor(public _deseosService : DeseosService){
    this.listasTerminadas = this._deseosService.listas.filter(item => { return item.terminada});
  }

  ListaSeleccionada( item:Lista){
    console.log(item)
  }
}
