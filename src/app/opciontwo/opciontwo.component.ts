import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable,Observer } from 'rxjs';
declare var M: any;
import {IMAGE} from "../core/key/imglogo";
import {ARRAY_MENU} from "../core/key/arrayMenu";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
type AOA = any[][];
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {MenuItem} from 'primeng/api';
import * as B from '../graphql/queries';
import {CreadorComponentesPDFService} from '../services/pdfmake/creacionComponentes.service';
import {CreadorComponentesPDFReportesService} from '../services/pdfmake/creacionComponentesReportes.service';
import {CreadorReporteExcel} from "../services/excel/creacionReporteExcel.service";
import {MENU} from "./menu";
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
  dataexcel: AOA = [ ];
  title = 'Reporte';
  excel=[];
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
  variablesItemsBooleans: any = [];
  arreglocomandosmenus = [
    {command: (event: any) => {
      this.limpiarDivs(0);
      this.limpiarmenu("DATOS GENERALES","divDatosGenerales",0);
    }},
    {command: (event: any) => {
      this.limpiarDivs(1);
      this.limpiarmenu("CONCESIÓN","divConcesion",1);
    }},
    {command: (event: any) => {
      this.limpiarDivs(2);
      this.limpiarmenu("UBICACIÓN","divUbicacion",2);
    }},
    {command: (event: any) => {
     this.limpiarDivs(3);
     this.limpiarmenu("TRÁMITES","divTramites",3);
   }},
    {command: (event: any) => {
     this.limpiarDivs(4);
     this.limpiarmenu("PERMISODC","divPermisoDC",4);
   }},
    {command: (event: any) => {
     this.limpiarDivs(5);
     this.limpiarmenu("TARIFA","divTarifa",5);
   }},
   {
     command: (event: any) => {
      this.limpiarDivs(6);
      this.limpiarmenu("EXPEDIENTE","divExpedientesDC",6);
     }
   },
   {
     command: (event: any) => {
      this.limpiarDivs(7);
      this.limpiarmenu("REVISTA Y CROMATICA","divRevistaT",7);
     }
   }
 ];

  constructor(
      private router?: Router,
      private apollo?: Apollo,
      public creadorComponentesPDFService?: CreadorComponentesPDFService,
      public creadorComponentesPDFReportesService?: CreadorComponentesPDFReportesService,
      public creadorReporteExcel?: CreadorReporteExcel

    ){}

    ngOnInit() {
      let variables = MENU.ENTIDADES;
      for(var i = 0; i < variables.length; i++){
        var o1 =  variables[i] ;
        var o2 =  this.arreglocomandosmenus[i];
        let obj2 = Object.assign(o2, o1);
        this.variablesItemsBooleans.push(obj2);
      }
      this.modalidades = [
            {label: 'Taxi', value: 'Taxi'},
            {label: 'MotoTaxi', value: 'MotoTaxi'}
        ];
       this.itemsMenu = [
            {
                label: 'Información General',
                icon: 'pi pi-fw pi-file',
                items: [{
                  label: 'Agregar',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                    {
                      label: 'Estatus de la concesión',
                      command: (event: any) => {
                         this.agregaritem("CONCESIÓN");
                         this.variablesItemsBooleans[1].value = true;
                      }
                    },
                    {
                      label: 'Datos de la Ubicación',
                      command: (event: any) => {
                        this.agregaritem("UBICACIÓN");
                        this.variablesItemsBooleans[2].value = true;
                      }
                    },
                  ]
                },
                {separator:true},
              ]
            },
            {separator:true},
            {
              label: 'Trámites SICAC',
              icon: 'pi pi-fw pi-pencil',
              items: [{
                label: 'Agregar todos', command: (event: any) => {
                  this.agregaritem("TRÁMITES");
                  this.variablesItemsBooleans[3].value = true;

                }}
              ]
            },
            {separator:true},
            {
              label: 'Trámites SEMOVI',
              icon: 'pi pi-fw pi-pencil',
              items: [
                {label: 'Permisos DC', command: (event: any) => {
                  this.agregaritem("PERMISODC");
                  this.variablesItemsBooleans[4].value = true;

                }},
                {label: 'Tárifas', command: (event: any) => {
                  this.agregaritem("TARIFA");
                  this.variablesItemsBooleans[5].value = true;

                }},
                {label: 'Expedientes', command: (event: any) => {
                  this.agregaritem("EXPEDIENTE");
                  this.variablesItemsBooleans[6].value = true;

                }},
                {label: 'Revista y Cromatica', command: (event: any) => {
                  this.agregaritem("REVISTA Y CROMATICA");
                  this.variablesItemsBooleans[7].value = true;

                }}
              ]
            }
          ];
          let variablemenusamostrar = [];
          for(let i = 0; i < this.variablesItemsBooleans.length;i++){
            if(this.variablesItemsBooleans[i].value){
              variablemenusamostrar.push(this.variablesItemsBooleans[i]);
            }
          }
          this.items2 = variablemenusamostrar;
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

        agregaritem(nombre: any){
           this.items2 = [];
          for(var i = 0; i < this.variablesItemsBooleans.length; i++){
            if(this.variablesItemsBooleans[i].label == nombre){
              this.variablesItemsBooleans[i].value = true;
              this.variablesItemsBooleans[i].mostrado = false;
            }
          }
          for(var i = 0; i < this.variablesItemsBooleans.length; i++){
            if(this.variablesItemsBooleans[i].value){
               this.items2.push(this.variablesItemsBooleans[i]);
            }
          }
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

        generaformatoconmakepdf(){
          pdfMake.fonts = {
            Roboto: {
              normal: 'Roboto-Regular.ttf',
              bold: 'Roboto-Medium.ttf',
              italics: 'Roboto-Italic.ttf',
              bolditalics: 'Roboto-MediumItalic.ttf'
            }
          }

          let content_array = [];
          content_array.push(this.creadorComponentesPDFService.getDatosGenerales(this.registroamostrar));
             if(this.variablesItemsBooleans[1].value){
              content_array.push(this.creadorComponentesPDFService.getDatosDeLaConcesion(this.registroamostrar));
            }
            if(this.variablesItemsBooleans[2].value){
              content_array.push(this.creadorComponentesPDFService.getDatosDeUbicacion(this.registroamostrar));
            }
            if(this.variablesItemsBooleans[3].value){
              content_array.push(this.creadorComponentesPDFService.getTramites());
            }

            content_array.push(this.creadorComponentesPDFService.getDatosTarifas());

            content_array.push(this.creadorComponentesPDFService.getDatosPermisosDC());
           var dd = {
            pageSize: 'LETTER',
             pageMargins: [ 20, 90, 20, 30 ],
             background:{ columns: [
                 { width: 300,text: ''},
                 { image: 'data:image/jpeg;base64,'+IMAGE.IMAGE_B,width: 256,height: 60, margin: [0, 20, 0, 60]},
                ]
             },
             header: {
                   margin: 10,
                   columns: [
                       {
                         margin: [40, 10, 0, 0],
                         text:[ 'Secretaría de Movilidad \n Gobierno del Estado de Oaxaca \n' ,{text: "Unidad de Informática", fontSize: 12,bold: true},'',{text: '\nOAXACA DE JUÁREZ, OAX, A 10 DE OCTUBRE DE 2019', fontSize: 8}], fontSize: 14,bold: true,

                       }
                   ]
               },
            content: content_array
          };
          pdfMake.createPdf(dd).download('Ejemplo.pdf');
        }

       generarexcel(){
          this.creadorReporteExcel.generarexcel();
       }

       closeItem(event, index, name: any) {
          for(var i = 0; i < this.variablesItemsBooleans.length; i++){
           if(this.variablesItemsBooleans[i].label == name){
             this.variablesItemsBooleans[i].value = false;
           }
         }
             this.items2 = this.items2.filter((item, i) => i !== index);
             event.preventDefault();
       }

       public limpiarDivs(indice: any){
          for(var i = 0; i < this.variablesItemsBooleans.length;i++){
            if(this.variablesItemsBooleans[i].mostrado && indice!= i && this.variablesItemsBooleans[i].value){
             this.limpiarMenudirecto(this.variablesItemsBooleans[i].label,this.variablesItemsBooleans[i].div,i)
           }
         }
       }

       limpiarMenudirecto(nombre: any, div: any,indice:any){
         let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
         let itemmenu = null;
         for(var i = 0; i < itemsmenu.length; i++){
           if(itemsmenu[i].firstChild.textContent == nombre ){
             itemmenu = itemsmenu[i];
            }
         }
         let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
               document.getElementById(div).style.border = "";
               itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
               itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
               for(var i = 0; i < itemsmenu2.length; i++){
                 itemsmenu2[i].style.color = "#333333";
               }
               itemmenu.style.color = "#333333";
               this.asignarmostrado(indice,false);
       }

       limpiarmenu(nombre: any, div: any,indice: any){
         let itemsmenu = document.getElementsByClassName("ui-menuitem-text");
         let itemmenu = null;
         for(var i = 0; i < itemsmenu.length; i++){
             if(itemsmenu[i].firstChild.textContent == nombre){
             itemmenu = itemsmenu[i];
            }
         }
         let itemsmenu2 = document.getElementsByClassName("pi pi-times") as HTMLCollectionOf<HTMLElement>;
             if(document.getElementById(div).style.border.length>0){
               document.getElementById(div).style.border = "";
               itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #c8c8c8";
               itemmenu.parentNode.parentNode.parentNode.style.background = "#f4f4f4";
               for(var i = 0; i < itemsmenu2.length; i++){
                 itemsmenu2[i].style.color = "#333333";
               }
               itemmenu.style.color = "#333333";
               document.getElementById(div).style.border = "";
               this.asignarmostrado(indice,false);
             }else{
               itemmenu.parentNode.parentNode.parentNode.style.border = "1px solid #007ad9";
               itemmenu.parentNode.parentNode.parentNode.style.background = "#007ad9";
               document.getElementById(div).style.border = "thick solid #0000FF";
               for(var i = 0; i < itemsmenu2.length; i++){
                 itemsmenu2[i].style.color = "#000000";
               }
               itemmenu.style.color = "#FFFFFF";
               document.getElementById(div).style.border = "thick solid #0000FF";
               this.asignarmostrado(indice,true);
               window.location.hash = '#'+div;
             }
       }

       asignarmostrado(indice: any, booleano: any){
           this.variablesItemsBooleans[indice].mostrado = booleano;
        }
}
