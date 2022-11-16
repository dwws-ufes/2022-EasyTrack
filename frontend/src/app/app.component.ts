import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private dialog: MatDialog){}

  ngOnInit(): void {
    //this.openConfig()
  }
  
  openConfig(){
    const dialogConfiguracao = this.dialog.open(ConfiguracaoComponent);
  }

  changeRegistration(){
    console.log("CONCLUIR: Alterar Cadastro")
  }

  logout(){
    console.log("Sair")
  }
}
