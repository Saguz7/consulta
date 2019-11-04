import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
type AOA = any[][];

@Injectable({
  providedIn: 'root'
})
export class CreadorReporteExcel {
   dataexcel: AOA = [ ];
  title = 'Reporte';
  excel=[];
  constructor() { }

  generarexcel(){

    let datosexcel = [];

    datosexcel.push(['Nombre','Sitio','Municipio','Localidad','Servicio','Acuerdo','NUC','Num. Unidades','Fecha del Acuerdo','Fecha de Vencimiento','Fecha de Captura']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);
    datosexcel.push(['CHINO CRUZ ALEJANDRINO','SITIO MOTO TAXIS EL SEÑOR DE LA ASCENCION A.C.','SANTA CRUZ XOXOCOTLAN','SANTA CRUZ XOXOCOTLAN','MOTOTAXI','PMT02330','12-913 / MT-CTRO-015','1','2008-11-27','2008-11-27','2009-02-17']);


      const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(datosexcel);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Reporte');

     XLSX.writeFile(wb, 'Reporte.xlsx');

  }

}
