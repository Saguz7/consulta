import { ComponentRef, ComponentFactoryResolver,ChangeDetectorRef, ViewContainerRef, ViewChild, Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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
  busquedapornombre: boolean = true;
  busquedapornuc: boolean = false;
  busquedaporsitio: boolean = false;
  registroabuscar: any;
  data: Observable<any>;
  divplantillas: boolean = false;
  registroamostrar: any;
  @Output() Ostatus = new EventEmitter<any>();
  @Output() Result = new EventEmitter<any>();
  opBusquedaConcesionario: boolean = true;
  opBusquedaVehiculo: boolean = false;
  opBusquedaSitio: boolean = false;
  divdebusquedaSitio: boolean = false;
  divsitio: boolean = false;

  sitios: any;


  busquedaporneconomico: boolean = false;
  busquedaporserie: boolean = false;
  busquedapormotor: boolean = false;

  vehiculos : any;
  constructor(
      private router?: Router,
      private apollo?: Apollo,

    ){}

  ngOnInit() {
       this.sitios = [
         {nombre:"Centro Oaxaca",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca2",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca3",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca4",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca5",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca6",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca7",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca8",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca9",localidad:"OAXACA DE JUAREZ"},
         {nombre:"Centro Oaxaca10",localidad:"OAXACA DE JUAREZ"}
       ];


       this.vehiculos = [
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"},
         {numero_economico:"322",serie:"67G3G2136721G3",estatus:"Activo",motor:"HECHO EN INDIA"}

       ];
      }


       asignarBusquedaXNombre(){
        this.busquedapornombre=true;
        this.busquedapornuc=false;
        this.busquedaporsitio=false;
       }

       asignarBusquedaXSitio(){
        this.busquedapornombre=false;
        this.busquedaporsitio=true;
        this.busquedapornuc=false;
        }

       asignarBusquedaXNUC(){
        this.busquedapornombre=false;
        this.busquedaporsitio=false;
        this.busquedapornuc=true;
       }

      mychange(event)
       {

             if(this.busquedapornombre==true){
               this.divdebusqueda = true;
               this.llamarregistros(1);
             }
             if(this.busquedapornuc==true){
               this.divdebusqueda = true;
               this.llamarregistros(2);
             }
             if(this.busquedaporsitio==true){
               this.divdebusqueda = true;
               this.divdebusquedaSitio = true;
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

  seleccionarsitio(){
    this.divplantillas = false;
    this.divdebusqueda = false;
    this.divsitio = true;
  }

    mostrarOpcionesBusquedaConcesionario(){
      this.opBusquedaConcesionario= true;
      this.opBusquedaVehiculo= false;
      this.opBusquedaSitio = false;
     }


    mostrarOpcionesBusquedaVehiculo(){
      this.opBusquedaConcesionario= false;
      this.opBusquedaVehiculo= true;
      this.opBusquedaSitio = false;
    }


    mostrarOpcionesBusquedaSerie(){
      this.opBusquedaConcesionario= false;
      this.opBusquedaVehiculo= false;
      this.opBusquedaSitio = true;
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


      asignarBusquedaXVehiculoNEconomico(){
        this.busquedaporneconomico = true;
        this.busquedaporserie = false;
        this.busquedapormotor = false;
      }

      asignarBusquedaXVehiculoSerie(){
        this.busquedaporneconomico = false;
        this.busquedaporserie = true;
        this.busquedapormotor = false;
      }

      asignarBusquedaXVehiculoMotor(){
        this.busquedaporneconomico = false;
        this.busquedaporserie = false;
        this.busquedapormotor = true;
      }






}
