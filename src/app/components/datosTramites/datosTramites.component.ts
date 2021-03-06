import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
  import {Router} from '@angular/router';
  import {Apollo} from 'apollo-angular';
  import gql from 'graphql-tag';
  import { Observable,Observer } from 'rxjs';
  declare var M: any;

  import pdfMake from "pdfmake/build/pdfmake";
  import pdfFonts from "pdfmake/build/vfs_fonts";
  import * as XLSX from 'xlsx';
  const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const EXCEL_EXTENSION = '.xlsx';
  type AOA = any[][];
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  export interface myinterface {
    remove(index: number,nameComponet: any);
  }
 @Component({
  selector: 'app-datosTramites', templateUrl: './datosTramites.component.html', styleUrls: ['./datosTramites.component.css']
})
export class DatosTramitesComponent implements OnInit {


    public index: number;
    public selfRef: DatosTramitesComponent;
    //interface for Parent-Child interaction
    public compInteraction: myinterface;

    @Input() IModel: any;
    @Input() NameComponet: any;
    tramites: any[];
    cols: any[];
  constructor(
    ){}
    ngOnInit() {
     this.tramites = [
       {
         referencia: "199988",
         descripcion: "ALTA DE VEHÍCULO",
         estatusTramite: "Activo",
         fecha: "04/01/2019",
         modelo: "2014",
         estatusVehiculo: "Alta",
         fechaImp:"",
         estatusIMP:"",

       },
       {
         referencia: "193670",
         descripcion: "CESIÓN DE DERECHOS",
         estatusTramite: "Activo",
         fecha: "18/11/2017",
         modelo: "",
         estatusVehiculo: "",
         fechaImp:"",
         estatusIMP:"",

       },
       {
         referencia: "111064",
         descripcion: "CAMBIO DE VEHÍCULO",
         estatusTramite: "Activo",
         fecha: "30/07/2013",
         modelo: "2014",
         estatusVehiculo: "Baja",
         fechaImp:"30/07/2014",
         estatusIMP:"30/07/2012",

       }
     ];

     }


          verImodel(){
            console.log(this.IModel.concesionario.primerApellido);
          }


                    removeMe(index,nameComponet) {
                      this.compInteraction.remove(index,nameComponet)

                     }



}
