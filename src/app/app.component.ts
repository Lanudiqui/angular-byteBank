import { Component } from '@angular/core';
import { TransferenciasService } from './services/transferencias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  transferencias: any[] = [];

  constructor(private transferenciasService: TransferenciasService){}

  transferir($event: any){

    this.transferenciasService.agregar($event);


    //console.log('Este mensaje es el componente App ', $event);
    //his.transferencias.push($event);
  }
}
