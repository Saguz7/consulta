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
  selector: 'app-expedientesDC', templateUrl: './expedientesDC.component.html', styleUrls: ['./expedientesDC.component.css']
})
export class ExpedientesDC implements OnInit {

  @Input() IModel: any;

  constructor(
    ){}
    ngOnInit() {

     }


          verImodel(){
            console.log(this.IModel.concesionario.primerApellido);
          }



}
