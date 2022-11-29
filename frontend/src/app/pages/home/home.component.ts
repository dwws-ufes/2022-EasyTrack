import { Component, OnInit } from '@angular/core';
import { rastrearEncomendas } from 'correios-brasil';
import { Pacote } from 'src/app/model/pacote.model';
import { CorreiosService } from 'src/app/service/correios.service';
import { Mapeamento } from 'src/app/utils/mapeamento.util.';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  codigo: string | undefined;
  regCorreios = /^[A-Z]{2}[0-9]{9}[A-Z]{2}$/
  pacote: Pacote = new Pacote();

  constructor( private correioService: CorreiosService) {

   }

  ngOnInit(): void {
  }

  verificaCodigoCorreios(codigo: any): any{
    if(this.regCorreios.test(codigo)){
      this.correioService.getEncomenda([codigo]).subscribe((response: any) => {
        this.pacote = Mapeamento.correiosToPacote(response)
      })
   }
   
  }

}
