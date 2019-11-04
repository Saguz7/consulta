  import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
  import {Router} from '@angular/router';
  import {Concesionario} from '../models/vo/concesionario';
  import {Apollo} from 'apollo-angular';
  import gql from 'graphql-tag';
  import { Observable,Observer } from 'rxjs';
  import {User} from "../core/models/user.model";
  declare var M: any;

  import * as B from '../graphql/queries';

@Component({
  selector: 'app-searchLocalidad', templateUrl: './searchLocalidad.component.html', styleUrls: ['./searchLocalidad.component.css']
})

export class SearchLocalidadComponent implements OnInit {

  divdebusqueda: boolean = true;
  busquedaporlocalidad: boolean = false;
  busquedapormunicipio: boolean = true;
  registroabuscar: any;
  data: any;
  divplantillas: boolean = false;
  registroamostrar: any;
  @Output() LOstatus = new EventEmitter<any>();
  @Output() LResult = new EventEmitter<any>();
  @Output() TypeSearch = new EventEmitter<any>();

  opBusquedaConcesionario: boolean = true;
  opBusquedaVehiculo: boolean = false;

  constructor(
      private router?: Router,
      private apollo?: Apollo
    ){}

  ngOnInit() {
      }


      seleccionarLocalidad(){
        this.busquedaporlocalidad=true;
        this.busquedapormunicipio=false;
        this.TypeSearch.emit(false);
      }


      seleccionarMunicipio(){
        this.busquedaporlocalidad=false;
        this.busquedapormunicipio=true;
        this.TypeSearch.emit(true);
       }

       mychange(event)
        {
             this.divdebusqueda = true;
             this.llamarregistros(1);
       }

       llamarregistros(decision: any){

         /*
            this.apollo.use('backsicac').watchQuery({
             query: B.LISTAR_CONCESIONARIOS,
             variables: {
                     entrada: this.registroabuscar,
                     opcion: decision,
                     top: 10
                   }
           })
           .valueChanges.subscribe(result => {
             this.crearregistros(result.data)
           });

           */
           this.data = [
             {municipio: "Ocotlan de Morelos",localidad:"Buena Vista"},
             {municipio: "Ocotlan de Morelos", localidad:"Ocotlan de Morelos"},
             {municipio: "Oaxaca de Juarez", localidad:"Oaxaca de Juarez"}
           ];

       }

       crearregistros(registrosencontrados: any){
          this.data = registrosencontrados.concesiones;
       }

       seleccionarregistro(registro: any){
             this.registroamostrar = registro;
             this.LOstatus.emit(this.registroamostrar);
             this.divdebusqueda = false;
             this.divplantillas = true;
     }

     buscarOtraLocalidad(){
               this.LResult.emit(false);
               this.registroamostrar = undefined;
               this.divdebusqueda = true;
               this.busquedaporlocalidad = false;
               this.busquedapormunicipio = true;
               this.divplantillas = false;
     }

}
