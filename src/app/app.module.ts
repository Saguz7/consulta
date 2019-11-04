import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './resetpassword/resetpassword.component';
import { LoginComponent } from './login/login/login.component';
import { HomeComponent } from './home/home.component';
import { TarjetaInformativaComponent } from './components/tarjetainformativa/tarjetainformativa.component';
import { DatosGenerales } from './components/datosGenerales/datosGenerales.component';
import { DatosTramitesComponent } from './components/datosTramites/datosTramites.component';
import { EstatusConcesion } from './components/estatusConcesion/estatusConcesion.component';
import { DatosUbicacion } from './components/datosUbicacion/datosUbicacion.component';
import { SearchComponent } from './search/search.component';
import { SearchLocalidadComponent } from './searchLocalidad/searchLocalidad.component';
import { TarjetaSeleccionComponent } from './components/tarjetaSeleccion/tarjetaSeleccion.component';

import { PermisoDC } from './components/permisoDC/permisoDC.component';
import { PermisoDLE } from './components/permisoDLE/permisoDLE.component';
import { Tarifa } from './components/tarifa/tarifa.component';
import { ExpedientesDC } from './components/expedientesDC/expedientesDC.component';
import { RevistaT } from './components/revistaT/revistaT.component';

 import { LocalidadModalidadesComponent } from './components/localidadModalidades/localidadModalidades.component';
 import { MunicipioModalidades } from './components/municipioModalidades/municipioModalidades.component';


import { OpciontwoComponent } from './opciontwo/opciontwo.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {CorePDFModule} from "./services/core.module";
import * as $ from 'jquery';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TabViewModule} from 'primeng/tabview';
import {StepsModule} from 'primeng/steps';
import {MenubarModule} from 'primeng/menubar';
import {ListboxModule} from 'primeng/listbox';
import {TableModule} from 'primeng/table';
import {MultiSelectModule} from 'primeng/multiselect';
import {RadioButtonModule} from 'primeng/radiobutton';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    OpciontwoComponent,
    TarjetaInformativaComponent,
    DatosGenerales,
    EstatusConcesion,
    DatosUbicacion,
    MunicipioModalidades,
    LocalidadModalidadesComponent,
    TarjetaSeleccionComponent,
    SearchComponent,
    SearchLocalidadComponent,
    DatosTramitesComponent,
    ResetPasswordComponent,
    PermisoDC,
    PermisoDLE,
    Tarifa,
    ExpedientesDC,
    RevistaT,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    CorePDFModule,
    TabMenuModule,
    ButtonModule,
    CardModule,
    ScrollPanelModule,
     TabViewModule,
     StepsModule,
     TabMenuModule,
     MenubarModule,
     ListboxModule,
     TableModule,
     MultiSelectModule,
     RadioButtonModule,
     FontAwesomeModule
  ],
  entryComponents: [
    ChildComponent,
    DatosGenerales
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
