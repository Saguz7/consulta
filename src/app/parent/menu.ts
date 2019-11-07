export class MENU {
  public static get ENTIDADES(): any {
    return [
    {label: 'DATOS GENERALES', div: "divDatosGenerales" ,value: true,mostrado: false,pos: 0},
    {label: 'CONCESIÓN', div: "divConcesion",value: true,mostrado: false,pos: 1},
    {label: 'UBICACIÓN', div: "divUbicacion", value: true,mostrado: false,pos: 2},
    {label: 'TRÁMITES',div: "divTramites", value: true,mostrado: false,pos: 3},
    {label: 'PERMISODC',div: "divPermisoDC", value: false,mostrado: false,pos: 4},
    {label: 'TARIFA',div: "divTarifa", value: false,mostrado: false,pos: 5},
    {label: 'EXPEDIENTE',div: "divExpedientesDC", value: false,mostrado: false,pos: 6},
    {label: 'REVISTA Y CROMATICA',div: "divRevistaT", value: false,mostrado: false,pos: 7}
  ];
  };

}

//Agregar al arreglocomandosmenus de HomeComponent el command para ejecutar una accion cuando se presione el menu
