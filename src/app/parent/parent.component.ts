import { ComponentRef, ComponentFactoryResolver,ChangeDetectorRef, ViewContainerRef, ViewChild, Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ChildComponent } from '../child/child.component'
import { DatosGenerales } from '../components/datosGenerales/datosGenerales.component'
import { DatosUbicacion } from '../components/datosUbicacion/datosUbicacion.component'
import { EstatusConcesion } from '../components/estatusConcesion/estatusConcesion.component'
import { DatosTramitesComponent } from '../components/datosTramites/datosTramites.component'
import { PermisoDC } from '../components/permisoDC/permisoDC.component'
import { Tarifa } from '../components/tarifa/tarifa.component'
import { ExpedientesDC } from '../components/expedientesDC/expedientesDC.component'
import { RevistaT } from '../components/revistaT/revistaT.component'
import {MENU} from "./menu";
import {MenuItem} from 'primeng/api';


import {IMAGE} from "../core/key/imglogo";
import {ARRAY_MENU} from "../core/key/arrayMenu";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
type AOA = any[][];
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import {CreadorComponentesPDFService} from '../services/pdfmake/creacionComponentes.service';
import {CreadorComponentesPDFReportesService} from '../services/pdfmake/creacionComponentesReportes.service';
import {CreadorReporteExcel} from "../services/excel/creacionReporteExcel.service";

import {DialogService} from 'primeng/api';


import { TramitesModalComponent } from '../shared/modals/tramitesModal/tramitesModal.component';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
      providers: [DialogService]
})
export class ParentComponent {
      display: boolean = false;
  itemsMenu: MenuItem[];
  items2: MenuItem[];
  meses: any;

  activeItem: MenuItem;
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
  @Input() IModel: any;
  @Input() NameComponet: any;
  @ViewChild('viewContainerRef', { read: ViewContainerRef  , static: false})  VCR: ViewContainerRef;
   index: number = 0;
   componentsReferences = [];
  constructor(
    private CFR: ComponentFactoryResolver,
    private cdref: ChangeDetectorRef,
    public creadorComponentesPDFService?: CreadorComponentesPDFService,
    public creadorComponentesPDFReportesService?: CreadorComponentesPDFReportesService,
    public creadorReporteExcel?: CreadorReporteExcel,
    public dialogService?: DialogService
     ) {
  }

  ngOnInit() {
    this.meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

    $(document).ready(function(){
      $('.modal').modal();
    });

    let variables = MENU.ENTIDADES;
    for(var i = 0; i < variables.length; i++){
      var o1 =  variables[i] ;
      var o2 =  this.arreglocomandosmenus[i];
      let obj2 = Object.assign(o2, o1);
       this.variablesItemsBooleans.push(obj2);
    }

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
                       this.agregaritem(1,"CONCESIÓN");
                     }
                  },
                  {
                    label: 'Datos de la Ubicación',
                    command: (event: any) => {
                       this.agregaritem(2,"UBICACIÓN");
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
            icon: 'pi pi-fw pi-bars',
            items: [{
              label: 'Agregar todos', command: (event: any) => {
                this.agregaritem(3,"TRÁMITES");
              }}
            ]
          },
          {separator:true},
          {
            label: 'Trámites SEMOVI',
            icon: 'pi pi-fw pi-paperclip',
            items: [
              {label: 'Permisos DC', command: (event: any) => {
                this.agregaritem(4,"PERMISODC");
              }},
              {label: 'Tárifas', command: (event: any) => {
                this.agregaritem(5,"TARIFA");
              }},
              {label: 'Expedientes', command: (event: any) => {
                this.agregaritem(6,"EXPEDIENTE");
              }},
              {label: 'Revista y Cromatica', command: (event: any) => {
                this.agregaritem(7,"REVISTA Y CROMATICA");
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

      ngAfterViewInit() {
        this.componentsInitial();
        this.cdref.detectChanges();
      }

      componentsInitial(){
         this.agregaritem(0,"DATOS GENERALES");
         this.agregaritem(1,"CONCESIÓN");
         this.agregaritem(2,"UBICACIÓN");
         this.agregaritem(3,"TRÁMITES");
      }

      closeItem(event, index, num) {
         this.variablesItemsBooleans[index].value = false;
         this.remove(index,this.items2[num]);
        this.items2 = this.items2.filter((item, i) => i !== num);
        event.preventDefault();
       }

      cleanItemsMenu(){
        this.items2 = [];
        for(var i = 0; i < this.variablesItemsBooleans.length; i++){
          if(this.variablesItemsBooleans[i].value){
             this.items2.push(this.variablesItemsBooleans[i]);
          }
        }
      }

      agregaritem(indice: any,nombre: any){
          this.items2 = [];
        for(var i = 0; i < this.variablesItemsBooleans.length; i++){
          if(this.variablesItemsBooleans[i].label == nombre){
            this.variablesItemsBooleans[i].value = true;
           }
        }
        for(var i = 0; i < this.variablesItemsBooleans.length; i++){
          if(this.variablesItemsBooleans[i].value){
             this.items2.push(this.variablesItemsBooleans[i]);
          }
        }
         let componentFactory;
        switch (indice) {
                case 0:
                if(this.variablesItemsBooleans[0].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(DatosGenerales);
                  this.NameComponet=this.variablesItemsBooleans[0].label;
                  this.createComponent(componentFactory);
                 }
                 this.variablesItemsBooleans[0].mostrado = true;
                  break;
                case 1:
                 if(this.variablesItemsBooleans[1].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(EstatusConcesion);
                  this.NameComponet=this.variablesItemsBooleans[1].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[1].mostrado = true;
                 break;
                case 2:
                if(this.variablesItemsBooleans[2].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(DatosUbicacion);
                  this.NameComponet=this.variablesItemsBooleans[2].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[2].mostrado = true;
                break;
                case 3:
                if(this.variablesItemsBooleans[3].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(DatosTramitesComponent);
                  this.NameComponet=this.variablesItemsBooleans[3].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[3].mostrado = true;
                break;
                case 4:
                if(this.variablesItemsBooleans[4].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(PermisoDC);
                  this.NameComponet=this.variablesItemsBooleans[4].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[4].mostrado = true;
                break;
                case 5:
                if(this.variablesItemsBooleans[5].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(Tarifa);
                  this.NameComponet=this.variablesItemsBooleans[5].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[5].mostrado = true;
                break;
                case 6:
                if(this.variablesItemsBooleans[6].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(ExpedientesDC);
                  this.NameComponet=this.variablesItemsBooleans[6].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[6].mostrado = true;
                break;
                case 7:
                if(this.variablesItemsBooleans[7].mostrado == false){
                  componentFactory = this.CFR.resolveComponentFactory(RevistaT);
                  this.NameComponet=this.variablesItemsBooleans[7].label;
                  this.createComponent(componentFactory);
                 }
                this.variablesItemsBooleans[7].mostrado = true;
                break;
                default:
                break;
                 }
       }

  createComponent(componentFactory: any) {
    let componentRef: ComponentRef<any> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;
    currentComponent.selfRef = currentComponent;
    componentRef.instance.IModel = this.IModel;
    componentRef.instance.NameComponet = this.NameComponet;
    currentComponent.index = ++this.index;
    currentComponent.compInteraction = this;
    this.componentsReferences.push(componentRef);
  }

  remove(index: number, nameComponet: any) {
    if (this.VCR.length < 1)
      return;
    let componentRef = this.componentsReferences.filter(x => x.instance.NameComponet == nameComponet.label)[0];
    let component: ChildComponent = <ChildComponent>componentRef.instance;
    let vcrIndex: number = this.VCR.indexOf(componentRef);
     this.VCR.remove(vcrIndex);
    this.componentsReferences = this.componentsReferences.filter(x => x.instance.NameComponet !== nameComponet.label);
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


   generaformatoconmakepdf(){


     let diaActual = new Date();
     let fecha =  diaActual.getDate()  + ' DE '+ this.meses[diaActual.getMonth()].toUpperCase() +' DEL ' + diaActual.getFullYear()


     console.log("Aqui entra");
     pdfMake.fonts = {
       Roboto: {
         normal: 'Roboto-Regular.ttf',
         bold: 'Roboto-Medium.ttf',
         italics: 'Roboto-Italic.ttf',
         bolditalics: 'Roboto-MediumItalic.ttf'
       }
     }
     let content_array = [];
     content_array.push(this.creadorComponentesPDFService.getDatosGenerales(this.IModel));
     if(this.variablesItemsBooleans[1].value){
      content_array.push(this.creadorComponentesPDFService.getDatosDeLaConcesion(this.IModel));
    }
    if(this.variablesItemsBooleans[2].value){
      content_array.push(this.creadorComponentesPDFService.getDatosDeUbicacion(this.IModel));
    }
    if(this.variablesItemsBooleans[3].value){
      content_array.push(this.creadorComponentesPDFService.getTramites());
    }
    if(this.variablesItemsBooleans[4].value){
      content_array.push(this.creadorComponentesPDFService.getDatosTarifas());
    }
    if(this.variablesItemsBooleans[5].value){
      content_array.push(this.creadorComponentesPDFService.getDatosPermisosDC());
    }
    if(this.variablesItemsBooleans[6].value){
      content_array.push(this.creadorComponentesPDFService.getDatosExpedientes());
    }
    if(this.variablesItemsBooleans[7].value){
      content_array.push(this.creadorComponentesPDFService.getDatosRevista());
    }
      var dd = {
       pageSize: 'LETTER',
        pageMargins: [ 30, 110, 30, 40 ],
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
                    text:[ 'Secretaría de Movilidad \n Gobierno del Estado de Oaxaca \n' ,{text: "Unidad de Informática", fontSize: 12,bold: true},'',{text: '\nOAXACA DE JUÁREZ, OAX, A ' + fecha, fontSize: 8}], fontSize: 14,bold: true,

                  },
                  { columns: [
                       {
                         margin: [-265, 76, 0, 0],
                         width: '100%', text: 'INFORMACIÓN GENERAL DEL CONCESIONARIO', fontSize: 13,bold: true,alignment: 'center' }
                    ]
                  },
              ]
          },
       content: content_array
     };
     pdfMake.createPdf(dd).download('Ejemplo.pdf');
   }

  generarexcel(){
     this.creadorReporteExcel.generarexcel();
  }

  showDialog(){
        this.display = true;
    }

    show() {
    const ref = this.dialogService.open(TramitesModalComponent, {
        data: {
            concesion: this.IModel
        },
        header: 'Trámites del concesionario',
        width: '60%',
        height: '40%'
    });
    }

}
