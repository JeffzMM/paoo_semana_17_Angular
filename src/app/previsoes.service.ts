import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {


  constructor(
    private httpClient: HttpClient
  ) { }


/*   public obterPrevisoes(): Observable<Previsao[]> {
  
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=itu&appid=74ffc2e5cbcd30b5dd50daed7da1f89e&units=metric&lang=pt_br&cnt=16');
  } */

  obterPrevisaoCidade(cid): Observable<Previsao[]> {
    return this.httpClient.get<Previsao[]>(
      `http://api.openweathermap.org/data/2.5/forecast?q=${cid}&appid=3cc01aec87c58913307e3d4503b91099&units=metric&lang=pt_br&cnt=16`
    );
  }

}
