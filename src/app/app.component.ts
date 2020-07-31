import { Component, ViewChild, ElementRef } from '@angular/core';
import { PrevisoesService} from './previsoes.service';
import { Previsao } from './model/previsao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public previsoes: Previsao[];

  constructor (
    public previsoesService: PrevisoesService
  ) { /* 
    previsoesService.obterPrevisoes().subscribe ((previsoes) => {
        this.previsoes = previsoes['list'];
        console.log(this.previsoes);
    });  */
  }


  pesquisar(cid: string) {
    this.previsoesService.obterPrevisaoCidade(cid).subscribe((response: any) => {
      console.log(response);
      return this.previsoes = response['list'];
    });

  }
}
