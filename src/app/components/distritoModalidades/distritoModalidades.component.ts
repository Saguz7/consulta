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


 @Component({
  selector: 'app-distritoModalidades', templateUrl: './distritoModalidades.component.html', styleUrls: ['./distritoModalidades.component.css']
})
export class DistritoModalidades implements OnInit {
  modalidades: any[];
  localidades: any[];
  selectedModalidad: string = '';
  public tituloComponenteModalidad: any = "Modalidad";
  public tituloComponenteLocalidad: any = "Localidad";
  @Input() Entidad: any = '';

  constructor(
    ){}
    ngOnInit() {

      $(document).ready(function(){
        $('.tabs').tabs();
      });
      this.modalidades = [
            {label: 'Taxi', value: 'Taxi', cantidad: 120},
            {label: 'MotoTaxi', value: 'MotoTaxi', cantidad: 20}
        ];


        this.localidades = [
              {label: 'Ocotlan de Morelos', value: 'Ocotlan de Morelos', cantidad: 1},
              {label: 'Oaxaca de Juarez', value: 'Oaxaca de Juarez', cantidad: 4}
          ];
     }



}
