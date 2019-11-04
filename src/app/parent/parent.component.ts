import { ComponentRef, ComponentFactoryResolver, ViewContainerRef, ViewChild, Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ChildComponent } from '../child/child.component'
import { DatosGenerales } from '../components/datosGenerales/datosGenerales.component'
import {MENU} from "./menu";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  itemsMenu: MenuItem[];
  items2: MenuItem[];
  activeItem: MenuItem;
  variablesItemsBooleans: any = [];
  arreglocomandosmenus = [
    {command: (event: any) => {
      this.remove(0);
  }},
    {command: (event: any) => {
     }},
    {command: (event: any) => {
     }},
    {command: (event: any) => {
    }},
    {command: (event: any) => {
    }},
    {command: (event: any) => {
    }},
   {
     command: (event: any) => {
      }
   },
   {
     command: (event: any) => {
      }
   }
 ];
  @Input() IModel: any;

  @ViewChild('viewContainerRef', { read: ViewContainerRef  , static: false}) VCR: ViewContainerRef;
   index: number = 0;

  componentsReferences = [];

  constructor(private CFR: ComponentFactoryResolver) {
  }

  ngOnInit() {
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


      agregaritem(nombre: any){
        this.createComponent();
      }

  createComponent() {

    let componentFactory = this.CFR.resolveComponentFactory(DatosGenerales);




    let componentRef: ComponentRef<any> = this.VCR.createComponent(componentFactory);
    let currentComponent = componentRef.instance;
    currentComponent.selfRef = currentComponent;
    componentRef.instance.IModel = this.IModel;
    currentComponent.index = ++this.index;
    currentComponent.compInteraction = this;
    console.log(this.componentsReferences);

    // add reference for newly created component
    this.componentsReferences.push(componentRef);
  }

  remove(index: number) {

    if (this.VCR.length < 1)
      return;

    let componentRef = this.componentsReferences.filter(x => x.instance.index == index)[0];
    let component: ChildComponent = <ChildComponent>componentRef.instance;

    let vcrIndex: number = this.VCR.indexOf(componentRef)

    // removing component from container
    this.VCR.remove(vcrIndex);

    this.componentsReferences = this.componentsReferences.filter(x => x.instance.index !== index);
  }

}
