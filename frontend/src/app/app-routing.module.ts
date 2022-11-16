import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './pages/cadastro-usuario/cadastro-usuario.component';
import { EncomendasComponent } from './pages/encomendas/encomendas.component';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TransportadorasComponent } from './pages/transportadoras/transportadoras.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cadusr', component: CadastroUsuarioComponent},
  {path: 'encomendas', component: EncomendasComponent},
  {path: 'transp', component: TransportadorasComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
