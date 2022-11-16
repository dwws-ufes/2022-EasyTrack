import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from 'src/material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';
import { TabelaEncomendasComponent } from './components/encomendas-page/tabela/tabela-encomendas/tabela-encomendas.component';
import { CadastrarEncomendaComponent } from './components/encomendas-page/encomendas/cadastrar-encomenda/cadastrar-encomenda.component';
import { ConfiguracaoComponent } from './components/configuracao/configuracao.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';
import { FiltrosComponent } from './components/encomendas-page/filtros/filtros.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CriarEtiquetaComponent } from './components/encomendas-page/etiquetas/criar-etiqueta/criar-etiqueta.component';
import { DescreveEtiquetasComponent } from './components/encomendas-page/tabela/descreve-etiquetas/descreve-etiquetas.component';
import { AdicionarEtiquetaComponent } from './components/encomendas-page/etiquetas/adicionar-etiqueta/adicionar-etiqueta.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    EncomendasComponent,
    TabelaEncomendasComponent,
    CadastrarEncomendaComponent,
    ConfiguracaoComponent,
    TransportadorasComponent,
    FiltrosComponent,
    CriarEtiquetaComponent,
    DescreveEtiquetasComponent,
    AdicionarEtiquetaComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
