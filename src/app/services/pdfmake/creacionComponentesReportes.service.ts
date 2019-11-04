import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreadorComponentesPDFReportesService {

  constructor() { }

    getDatosTablaReporteLocalidad(){


       let arrayParaTabla = [];

       for(var i = 0; i < 30; i++){
         if(i == 0){
           arrayParaTabla.push(
             [ {text: 'No.', fontSize:9, bold: true,alignment: 'center' } ,
             {text: 'Nombre', fontSize:9, bold: true,alignment: 'center' } ,
             { text: 'Sitio', fontSize:9, bold: true,alignment: 'center' }  ,
             { text: 'Municipio', fontSize:9, bold: true,alignment: 'center' } ,
             { text: 'Localidad', fontSize:9, bold: true,alignment: 'center' } ,
             { text: 'Servicio', fontSize:9 , bold: true,alignment: 'center'}   ,
             { text: 'Acuerdo', fontSize:9, bold: true,alignment: 'center' }  ,
             { text: 'NUC', fontSize:9 , bold: true,alignment: 'center'}  ,
             { text: 'Num. Unidades', fontSize:9 , bold: true,alignment: 'center'},
             { text: 'Fecha del Acuerdo', fontSize:9 , bold: true,alignment: 'center'},
             { text: 'Fecha de Vencimiento', fontSize:9 , bold: true,alignment: 'center'},
             { text: 'Fecha de Captura', fontSize:9 , bold: true,alignment: 'center'},

             ]
           );


         }
          arrayParaTabla.push(
            [ {text: (i+1), fontSize:7,alignment: 'center' } ,
            {text: 'CHINO CRUZ ALEJANDRINO', fontSize:7} ,
            { text: 'SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.', fontSize:7}  ,
            { text: 'SANTA CRUZ XOXOCOTLAN', fontSize:7,alignment: 'center' } ,
            { text: 'SANTA CRUZ XOXOCOTLAN', fontSize:7,alignment: 'center' } ,
            { text: 'MOTOTAXI', fontSize:7,alignment: 'center' }   ,
            { text: 'PMT02330', fontSize:7,alignment: 'center' }  ,
            { text: '12-913 / MT-CTRO-015', fontSize:7,alignment: 'center' }  ,
            { text: '1', fontSize:7,alignment: 'center' },
            { text: '2008-11-27', fontSize:7,alignment: 'center'},
            { text: '2010-11-27', fontSize:7,alignment: 'center'},
            { text: '2009-02-17', fontSize:7,alignment: 'center' },

          ]
          );


       }


      let datosTablaReporteLocalidad =
        {
              style: 'tableExample',
               table: {
                headerRows: 1,
                widths: [ '2%','10%', '15%', '7%', '7%','7%','7%','10%','5%','8%','8%','8%' ],
                body:  arrayParaTabla,
              },
    			layout: {
    				fillColor: function (rowIndex, node, columnIndex) {
    					return (rowIndex === 0) ? '#CCCCCC' : null;
    				},
            hLineWidth: function (i, node) {
    					return (i === 0 || i === node.table.body.length) ? 2 : 1;
    				},
    				vLineWidth: function (i, node) {
    					return (i === 0 || i === node.table.widths.length) ? 2 : 1;
    				},
    				hLineColor: function (i, node) {
    					return (i === 0 || i === node.table.body.length) ? 'white' : 'white';
    				},
    				vLineColor: function (i, node) {
    					return (i === 0 || i === node.table.widths.length) ? 'white' : 'white';
    				},

    			}
       };
      return datosTablaReporteLocalidad;

    }

}
