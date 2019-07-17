import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagInicioModule } from './pag-inicio/pag-inicio.module';
import { PagLoginComponent } from './pag-login/pag-login.component';
import { materialCompo } from './pag-inicio/ImportsMaterial';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FirebaseService } from './service/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Usuarios } from './clases/usuarios';
import { FormsModule } from '@angular/forms';
import { PagAboutComponent } from './pag-about/pag-about.component';
import { PagInstruComponent } from './pag-instru/pag-instru.component';
import { PagBajoComponent } from './pag-bajo/pag-bajo.component';
import { PagCajonComponent } from './pag-cajon/pag-cajon.component';
import { PagUkeleleComponent } from './pag-ukelele/pag-ukelele.component';

@NgModule({
  declarations: [
    AppComponent,
    PagLoginComponent,
    PagAboutComponent,
    PagInstruComponent,
    PagBajoComponent,
    PagCajonComponent,
    PagUkeleleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagInicioModule,
    materialCompo,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [FirebaseService, Usuarios],
  bootstrap: [AppComponent]
})
export class AppModule { }
