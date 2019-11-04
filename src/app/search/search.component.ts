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
  selector: 'app-search', templateUrl: './search.component.html', styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  divdebusqueda: boolean = true;
  busquedapornuc: boolean = false;
  busquedapornombre: boolean = true;
  registroabuscar: any;
  data: Observable<any>;
  divplantillas: boolean = false;
  registroamostrar: any;
  @Output() Ostatus = new EventEmitter<any>();
  @Output() Result = new EventEmitter<any>();
  opBusquedaConcesionario: boolean = true;
  opBusquedaVehiculo: boolean = false;

  constructor(
      private router?: Router,
      private apollo?: Apollo
    ){}

  ngOnInit() {
      }


      cambiarestado(){

        this.busquedapornombre=true;
        this.busquedapornuc=false;
      }


      cambiarestado2(){

        this.busquedapornombre=false;
        this.busquedapornuc=true;

       }

      mychange(event)
       {
            this.divdebusqueda = true;
            if(this.busquedapornombre==true){
               this.llamarregistros(1);
             }else{
                if(this.busquedapornuc==true){
                  this.llamarregistros(2);
                }
              }
      }


      llamarregistros(decision: any){
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
      }

      crearregistros(registrosencontrados: any){
         this.data = registrosencontrados.concesiones;
      }

      seleccionarregistro(registro: any){
            this.registroamostrar = registro;

                  this.Ostatus.emit(this.registroamostrar);
                  this.divdebusqueda = false;
                  this.divplantillas = true;

    }

    mostrarOpcionesBusquedaConcesionario(){
      this.opBusquedaConcesionario= true;
      this.opBusquedaVehiculo= false;
     }


    mostrarOpcionesBusquedaVehiculo(){
      this.opBusquedaConcesionario= false;
      this.opBusquedaVehiculo= true;
    }


      buscarOtroConcesionario(){

        this.Result.emit(false);

        this.registroamostrar = undefined;
      //   this.divdebusqueda = true;

        this.divdebusqueda = true;
        this.busquedapornuc = false;
        this.busquedapornombre = true;
        this.divplantillas = false;


      }






}
