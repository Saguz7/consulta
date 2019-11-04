export class MENU {
  public static get ENTIDADES(): any {
    return [
    {label: 'DATOS GENERALES', div: "divDatosGenerales" ,value: true,mostrado: false},
    {label: 'CONCESIÓN', div: "divConcesion",value: true,mostrado: false},
    {label: 'UBICACIÓN', div: "divUbicacion", value: true,mostrado: false},
    {label: 'TRÁMITES',div: "divTramites", value: true,mostrado: false},
    {label: 'PERMISODC',div: "divPermisoDC", value: false,mostrado: false},
    {label: 'TARIFA',div: "divTarifa", value: false,mostrado: false},
    {label: 'EXPEDIENTE',div: "divExpedientesDC", value: false,mostrado: false},
    {label: 'REVISTA Y CROMATICA',div: "divRevistaT", value: false,mostrado: false}
  ];
  };

}

//Agregar al arreglocomandosmenus de HomeComponent el command para ejecutar una accion cuando se presione el menu
