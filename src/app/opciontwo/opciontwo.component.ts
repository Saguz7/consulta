import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable,Observer } from 'rxjs';
declare var M: any;
import {MenuItem} from 'primeng/api';
import * as B from '../graphql/queries';

 @Component({
  selector: 'app-opciontwo', templateUrl: './opciontwo.component.html', styleUrls: ['./opciontwo.component.css']
})
export class OpciontwoComponent implements OnInit {
  btnsiguienteaftersearch: boolean = false;
  public registroabuscar: any;
  registroamostrar: any;
  localidadamostrar: any;
  items: MenuItem[];
  divdebusqueda: boolean = false;
  optBusquedaEntidad: boolean = true;
  mostrardetalles: boolean = false;
  mostrardetalleslocalidad: boolean = false;
  data: Observable<any>;
  activeIndex: number = 1;
  items2: MenuItem[];
  activeItem: MenuItem;
  itemsMenu: MenuItem[];
  val1: string;
  cities: any[];
  selectedCities: any[];
  selectedCity: any;
  modalidades: any[];
  selectedModalidad: string = '';
  namecomponet: string = '';
  constructor(
      private router?: Router,
      private apollo?: Apollo 
    ){}

    ngOnInit() {

      this.modalidades = [
            {label: 'Taxi', value: 'Taxi'},
            {label: 'MotoTaxi', value: 'MotoTaxi'}
        ];

          $(document).ready(function(){
            $('.tabs').tabs();
          });
        }

        public comprobar($event){
          this.btnsiguienteaftersearch = $event;
          this.mostrardetalles = false;
         }

        public comprobarLocalidad($event){
          this.btnsiguienteaftersearch = $event;
          this.mostrardetalleslocalidad = false;
        }

        public seleccionarEntidad($event){
          this.optBusquedaEntidad = $event;
         }

        listarModalidades(){
          this.apollo.use('backsicac').watchQuery({
           query: B.LISTAR_MODALIDADES,
         })
         .valueChanges.subscribe(result => {
           this.asignarModalidades(result.data)
         });
        }

        asignarModalidades(modalidades: any){
          console.log(modalidades);
        }



        public  check($event){
          this.mostrardetalles = true;
          this.registroamostrar = $event;
        }

        public  checkLocalidad($event){
          this.mostrardetalleslocalidad = true;
          this.localidadamostrar = $event;
        }

        seleccionarregistro(concesion: any){
          this.registroamostrar = concesion;
          this.mostrardetalles = true;
        }



}
