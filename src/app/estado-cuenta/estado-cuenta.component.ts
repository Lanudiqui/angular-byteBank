import { Component, Input, OnInit } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-estado-cuenta',
  templateUrl: './estado-cuenta.component.html',
  styleUrls: ['./estado-cuenta.component.scss']
})
export class EstadoCuentaComponent implements OnInit {

 // @Input()
  transferencias: any[] = [];

  constructor(private transfereniasService: TransferenciasService){

  }

  ngOnInit(): void {
    //this.transferencias = this.transfereniasService.transferencias;
    this.transfereniasService.mostrarTrasferencia().subscribe((m: Transferencia[]) =>{
      this.transferencias = m;
    });
  }

}
