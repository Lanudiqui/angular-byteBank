import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  listaTranferecias: any[]=[];
  url: string = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTranferecias=[];
   }

   mostrarTrasferencia():Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
   }


   get transferencias(){
    return this.listaTranferecias;
   }

  //  agregar($event: any){
  //   this.transferencias.push($event);
  //  }

   agregar(transferencia: Transferencia): Observable<Transferencia>{
    //this.transferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
   }
}
