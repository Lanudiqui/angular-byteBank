import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciasService } from '../services/transferencias.service';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-transferencia',
  templateUrl: 'nueva-transferencia.component.html',
  styleUrls: ['./nueva-transferencia.component.scss'],
})

export class NuevaTransfereciaComponent {

  // @Output()
  // enviarDatos = new EventEmitter<any>();

  constructor(private transfereniasService: TransferenciasService, private router: Router){}

  valor: string = '';
  destino: string='';

  transferir(){
    // console.log('Realizar trasnferencia');
    // console.log('Valor: ', this.valor);
    // console.log('Destino: ', this.destino);
    const datos: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      fecha: new Date(),
    };

    //this.enviarDatos.emit(datos);
    this.transfereniasService.agregar(datos).subscribe(() =>{
      // console.log(respuesta);
      this.router.navigateByUrl('estado');
    },(err) => console.log(err)
    );
    this.limpiarCampos();
    //Una manera de limpiar el formulario
    // this.valor = '';
    // this.destino = '';
  }

  //Tambien podemos crear un metodo para limpiar el formulario

  limpiarCampos(){
    this.valor = '';
    this.destino = '';
  }

}
