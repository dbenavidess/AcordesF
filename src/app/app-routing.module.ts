import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './pag-inicio/base/base.component';
import { PagLoginComponent } from './pag-login/pag-login.component';
import { PagInstruComponent } from './pag-instru/pag-instru.component';
import { PagUkeleleComponent } from './pag-ukelele/pag-ukelele.component';
import { PagCajonComponent } from './pag-cajon/pag-cajon.component';
import { PagBajoComponent } from './pag-bajo/pag-bajo.component';
import { PagAboutComponent } from './pag-about/pag-about.component';

const routes: Routes = [
  {path:'instruments', component: BaseComponent},
  {path:'register', component: PagLoginComponent},
  {path:'guitarra', component: PagInstruComponent},
  {path:'bajo', component: PagBajoComponent},
  {path:'cajon', component: PagCajonComponent},
  {path:'ukelele', component: PagUkeleleComponent},
  {path:'about', component: PagAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
