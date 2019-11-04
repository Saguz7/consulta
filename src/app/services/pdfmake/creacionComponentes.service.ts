import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreadorComponentesPDFService {

  constructor() { }

  getDatosGenerales(concesion: any){
     let datosGenerales = [
      { columns: [
           { width: '100%', text: 'INFORMACIÓN GENERAL DEL CONCESIONARIO', fontSize: 13,bold: true,alignment: 'center' }
        ]
      },
      {
          canvas: [
            {
              type: 'rect',
              x: 20,
              y: 10,
              w: 510,
              h: 20,
              color: '#f5f5f5',
            },
          ]
        },
      { columns: [
          { width: 20, text: ''},
          { width: 300, text: 'DATOS GENERALES', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
        ]
      }
      ,

    { columns: [
        { width: 40, text: '', margin: [0, 2, 0, 0]},
       ]
    },
    { columns: [
        { width: 40, text: ''},
        { width: 100, text: 'Nombre:', fontSize: 12,bold: true, margin: [0, 0, 0, 0]}
      ]
    },
    {
        canvas: [
          {
            type: 'rect',
            x: 90,
            y: -14,
            w: 440,
            h: 20,
            color: '#f5f5f5',
          },
        ]
      },
      { columns: [
          { width: 160, text: ''},
          { width: 100, text: concesion.concesionario.nombre, fontSize: 11,bold: true, margin: [0, -17, 0, 0]}
        ]
      },
      { columns: [
          { width: 270, text: ''},
          { width: 100, text: concesion.concesionario.primerApellido, fontSize: 11,bold: true, margin: [0, -17, 0, 0]}
        ]
      },
      { columns: [
          { width: 390, text: ''},
          { width: 100, text: concesion.concesionario.segundoApellido, fontSize: 11,bold: true, margin: [0, -17, 0, 0]}
        ]
      },
      { columns: [
          { width: 40, text: '', margin: [0, 0, 0, 3]},
         ]
      },
      { columns: [
          { width: 140, text: ''},
          { width: 120, text: 'APELLIDO PATERNO', fontSize: 9,bold: true},
          { width: 120, text: 'APELLIDO MATERNO', fontSize: 9,bold: true},
          { width: 120, text: 'APELLIDO NOMBRE', fontSize: 9,bold: true}
        ]
      },
      { columns: [
          { width: 40, text: '', margin: [0, 0, 0, 3]},
         ]
      },
      { columns: [
          { width: 56, text: ''},
          { width: 100, text: 'CURP:', fontSize: 10,bold: true, margin: [0, 0, 0, 0]}
        ]
      },
      {
          canvas: [
            {
              type: 'rect',
              x: 90,
              y: -14,
              w: 160,
              h: 20,
              color: '#f5f5f5',
            },
          ]
        },
        { columns: [
            { width: 125, text: ''},
            { width: 100, text: concesion.concesionario.curp, fontSize: 9,bold: true, margin: [0, -15, 0, 0]}
          ]
        },
        { columns: [
            { width: 320, text: ''},
            { width: 100, text: 'RFC:', fontSize: 10,bold: true, margin: [0, -15, 0, 0]}
          ]
        },
        {
            canvas: [
              {
                type: 'rect',
                x: 360,
                y: -20,
                w: 170,
                h: 20,
                color: '#f5f5f5',
              },
            ]
          },
          { columns: [
              { width: 410, text: ''},
              { width: 100, text: concesion.concesionario.rfc, fontSize: 10,bold: true, margin: [0, -15, 0, 0]}
            ]
          }
    ];
    return datosGenerales;
  }

  cuantasvecessalta(palabra: any){
    let veces = 1;
    let tamaniopalabra = palabra.length;
    for(var i = 1; (i*90) < tamaniopalabra; i++){
      veces = veces + 1;
    }
    return veces;
  }


  getDatosDeLaConcesion(concesion: any){
    let mensaje = "";
    if(concesion.estatus){
      mensaje = mensaje + "Activo ";
    }else{
      mensaje = mensaje + "Inactivo ";
    }
    if(concesion.condiciones.bloqueado){
      mensaje = mensaje + "Bloqueado ";
    }
    let observacion = concesion.observaciones;
    let splitobservacion = observacion.split("\n");
    let contador = 1;
    for(var i = 0; i < splitobservacion.length; i++){
      console.log(splitobservacion[i].length);
      if(splitobservacion[i].length > 70){
        contador = contador + this.cuantasvecessalta(splitobservacion[i]);
      }else{
        contador = contador + 1;
      }
    }

    let datosDeLaConcesion = [
      { //aqui empieza datos de la concesion
          canvas: [
            {
              type: 'rect',
              x: 20,
              y: 10,
              w: 510,
              h: 20,
              color: '#f5f5f5',
            },
          ]
        },
      { columns: [
          { width: 20, text: ''},
          { width: 300, text: 'DATOS DE LA CONCESIÓN', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
        ]
      },
      { columns: [
          { width: 40, text: '', margin: [0, 2, 0, 0]},
         ]
      },
      {
          canvas: [
            {
              type: 'rect',
              x: 90,
              y: 0,
              w: 170,
              h: 20,
              color: '#f5f5f5',
            },
          ]
        },
        {
            canvas: [
              {
                type: 'rect',
                x: 360,
                y: -20,
                w: 170,
                h: 20,
                color: '#f5f5f5',
              },
            ]
          },
        { columns: [
            { width: 20, text: ''},
            { width: 65, text: 'ACUERDO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
            { width: 10, text: ''},
            { width: 160, text: concesion.acuerdo, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
            { width: 5, text: ''},
            { width: 90, text: 'FECHA DEL ACUERDO:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
            { width: 20, text: ''},
            { width: 150, text: concesion.fechaAcuerdo, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}

          ]
        },
        { columns: [
            { width: 40, text: '', margin: [0, 2, 0, 0]},
           ]
        },
        {
            canvas: [
              {
                type: 'rect',
                x: 90,
                y: 0,
                w: 170,
                h: 20,
                color: '#f5f5f5',
              },
            ]
          },
          {
              canvas: [
                {
                  type: 'rect',
                  x: 360,
                  y: -20,
                  w: 170,
                  h: 20,
                  color: '#f5f5f5',
                },
              ]
            },
            { columns: [
                { width: 20, text: ''},
                { width: 65, text: 'MODALIDAD:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
                { width: 10, text: ''},
                { width: 160, text: concesion.modalidad.nombre, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                { width: 5, text: ''},
                { width: 90, text: 'NUC:', fontSize: 10,bold: true, margin: [0, -17, 0, 0],alignment: 'right'},
                { width: 20, text: ''},
                { width: 150, text: concesion.nuc, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}
              ]
            },
          { columns: [
              { width: 40, text: '', margin: [0, 2, 0, 0]},
             ]
          },
          {
              canvas: [
                {
                  type: 'rect',
                  x: 90,
                  y: 0,
                  w: 170,
                  h: 20,
                  color: '#f5f5f5',
                },
              ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 360,
                    y: -20,
                    w: 170,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
              { columns: [
                  { width: 20, text: ''},
                  { width: 65, text: 'VIGENCIA:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},
                  { width: 160, text: concesion.vigencia , fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                  { width: 5, text: ''},
                  { width: 90, text: 'No. UNIDADES:', fontSize: 10,bold: true, margin: [0, -17, 0, 0],alignment: 'right'},
                  { width: 20, text: ''},
                  { width: 150, text: '------------------', fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}
                ]
              },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 170,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
              {
                  canvas: [
                    {
                      type: 'rect',
                      x: 360,
                      y: -20,
                      w: 170,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
                { columns: [
                    { width: 20, text: ''},
                    { width: 65, text: 'FECHA DE INICIO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
                    { width: 10, text: ''},
                    { width: 160, text: concesion.fechaInicio, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                    { width: 5, text: ''},
                    { width: 90, text: 'VENCIMIENTO:', fontSize: 10,bold: true, margin: [0, -17, 0, 0],alignment: 'right'},
                    { width: 20, text: ''},
                    { width: 150, text: concesion.fechaVencimiento, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}
                  ]
                },
              { columns: [
                  { width: 40, text: '', margin: [0, 2, 0, 0]},
                 ]
              },
              {
                  canvas: [
                    {
                      type: 'rect',
                      x: 90,
                      y: 0,
                      w: 170,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
                {
                    canvas: [
                      {
                        type: 'rect',
                        x: 360,
                        y: -20,
                        w: 170,
                        h: 20,
                        color: '#f5f5f5',
                      },
                    ]
                  },
                  { columns: [
                      { width: 20, text: ''},
                      { width: 65, text: 'FOLIO ROBADO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
                      { width: 10, text: ''},
                      { width: 160, text: '---------' ,fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                      { width: 5, text: ''},
                      { width: 90, text: 'ESTATUS:', fontSize: 10,bold: true, margin: [0, -17, 0, 0],alignment: 'right'},
                      { width: 20, text: ''},
                      { width: 150, text: mensaje, fontSize: 10, margin: [0, -17, 0, 0]}
                    ]
                  },
                { columns: [
                    { width: 40, text: '', margin: [0, 2, 0, 0]},
                   ]
                },
                {
                    canvas: [
                      {
                        type: 'rect',
                        x: 90,
                        y: 0,
                        w: 440,
                        h: 20,
                        color: '#f5f5f5',
                      },
                    ]
                  },
                { columns: [
                  { width: 20, text: ''},
                  { width: 65, text: 'SITIO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},

                  { width: 160, text: concesion.sitio.nombre, fontSize: 10, margin: [0, -17, 0, 0] },
                  { width: 5, text: ''},
                  ]
                },

                { columns: [
                    { width: 40, text: '', margin: [0, 2, 0, 0]},
                   ]
                },
                {
                    canvas: [
                      {
                        type: 'rect',
                        x: 90,
                        y: 0,
                        w: 440,
                        h: (contador * 10),
                        color: '#f5f5f5',
                      },
                    ]
                  },
                { columns: [
                  { width: 3, text: ''},
                  { width: 82, text: 'OBSERVACIONES:', fontSize: 10,bold: true, margin: [0, (contador * -17)/2, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},
                  { width: 430, text: concesion.observaciones, fontSize: 9, margin: [0, (contador * -18)/2, 0, 0],alignment: 'justify'},
                  { width: 5, text: ''},
                  ]
                },


                { columns: [
                    { width: 40, text: '', margin: [0, 2, 0, 0]},
                   ]
                },
                {
                    canvas: [
                      {
                        type: 'rect',
                        x: 90,
                        y: 0,
                        w: 440,
                        h: 20,
                        color: '#f5f5f5',
                      },
                    ]
                  },
                { columns: [
                  { width: 3, text: ''},
                  { width: 82, text: 'OBSERVACIONES ACTA:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},
                  { width: 160, text: concesion.observacionesActa, fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                  { width: 5, text: ''},
                  ]
                }
    ];
    return datosDeLaConcesion;
  }


  getDatosDeUbicacion(concesion: any){
    let datosDeUbicacion = [
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },{ //aqui empieza DATOS DE UBICACION
                  canvas: [
                    {
                      type: 'rect',
                      x: 20,
                      y: 10,
                      w: 510,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
            { columns: [
                { width: 20, text: ''},
                { width: 300, text: 'DATOS DE UBICACIÓN', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
              ]
            },
          { columns: [
              { width: 40, text: '', margin: [0, 2, 0, 0]},
             ]
          },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 440,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
            { columns: [
              { width: 20, text: ''},
              { width: 65, text: 'LOCALIDAD:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
              { width: 10, text: ''},

              { width: 340, text: concesion.concesionario.localidad.nombre, fontSize: 10, margin: [0, -17, 0, 0]},
              { width: 5, text: ''},
              ]
            },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 440,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
          { columns: [
            { width: 20, text: ''},
            { width: 65, text: 'MUNICIPIO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
            { width: 10, text: ''},

            { width: 340, text: concesion.concesionario.localidad.municipio.nombre, fontSize: 10, margin: [0, -17, 0, 0]},
            { width: 5, text: ''},
            ]
          },
          { columns: [
              { width: 40, text: '', margin: [0, 2, 0, 0]},
             ]
          },
          {
              canvas: [
                {
                  type: 'rect',
                  x: 90,
                  y: 0,
                  w: 440,
                  h: 20,
                  color: '#f5f5f5',
                },
              ]
            },
        { columns: [
          { width: 20, text: ''},
          { width: 65, text: 'DISTRITO:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
          { width: 10, text: ''},

          { width: 340, text: concesion.concesionario.localidad.municipio.distrito.nombre, fontSize: 10, margin: [0, -17, 0, 0]},
          { width: 5, text: ''},
          ]
        }
    ];
    return datosDeUbicacion;
  }


  getDatosTarifas(){
    let datosDeTarifas = [
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },{ //aqui empieza DATOS DE UBICACION
                  canvas: [
                    {
                      type: 'rect',
                      x: 20,
                      y: 10,
                      w: 510,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
            { columns: [
                { width: 20, text: ''},
                { width: 300, text: 'REGISTRO DE TARIFA', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
              ]
            },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 440,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
            { columns: [
              { width: 5, text: ''},
              { width: 80, text: 'Nombre Plantilla:', fontSize: 10,bold: true, margin: [0, -16, 0, 0],alignment: 'right'},
              { width: 10, text: ''},

              { width: 340, text: "Plantilla de Santa Maria Huatulco", fontSize: 10, margin: [0, -17, 0, 0]},
              { width: 5, text: ''},
              ]
            },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 170,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
              {
                  canvas: [
                    {
                      type: 'rect',
                      x: 360,
                      y: -20,
                      w: 170,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
              { columns: [
                  { width: 20, text: ''},
                  { width: 65, text: 'SERIE VEHICULO:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},
                  { width: 160, text: "FASD324FD23F23", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                  { width: 5, text: ''},
                  { width: 90, text: 'FECHA DE LA RELACIÓN:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                  { width: 20, text: ''},
                  { width: 150, text: "30/10/2019", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}

                ]
              }

    ];
    return datosDeTarifas;
  }

  getDatosPermisosDC(){
    let datosDePermisoDC = [
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },{ //aqui empieza DATOS DE UBICACION
                  canvas: [
                    {
                      type: 'rect',
                      x: 20,
                      y: 10,
                      w: 510,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
            { columns: [
                { width: 20, text: ''},
                { width: 300, text: 'REGISTRO DE PERMISO DC', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
              ]
            },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },
            {
                canvas: [
                  {
                    type: 'rect',
                    x: 90,
                    y: 0,
                    w: 170,
                    h: 20,
                    color: '#f5f5f5',
                  },
                ]
              },
              {
                  canvas: [
                    {
                      type: 'rect',
                      x: 360,
                      y: -20,
                      w: 170,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
              { columns: [
                  { width: 20, text: ''},
                  { width: 65, text: 'FOLIO PERMISO:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                  { width: 10, text: ''},
                  { width: 160, text: "PC0001", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                  { width: 5, text: ''},
                  { width: 90, text: 'FECHA EMISIÓN:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                  { width: 20, text: ''},
                  { width: 150, text: "30/10/2019", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}

                ]
              },
              { columns: [
                  { width: 40, text: '', margin: [0, 2, 0, 0]},
                 ]
              },
              {
                  canvas: [
                    {
                      type: 'rect',
                      x: 90,
                      y: 0,
                      w: 170,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
                {
                    canvas: [
                      {
                        type: 'rect',
                        x: 360,
                        y: -20,
                        w: 170,
                        h: 20,
                        color: '#f5f5f5',
                      },
                    ]
                  },
                { columns: [
                    { width: 20, text: ''},
                    { width: 65, text: 'FOLIO HOJA VALORADA:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                    { width: 10, text: ''},
                    { width: 160, text: "321432432", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'},
                    { width: 5, text: ''},
                    { width: 90, text: 'SERIE VEHÍCULO:', fontSize: 10,bold: true, margin: [0, -20, 0, 0],alignment: 'right'},
                    { width: 20, text: ''},
                    { width: 150, text: "FASD324FD23F23", fontSize: 10, margin: [0, -17, 0, 0],alignment: 'center'}

                  ]
                }

    ];
    return datosDePermisoDC;
  }

  getDatosExpedientes(){

  }

  getDatosRevista(){

  }


  getDatosEncabezados(){
    let cabecera = [
      { columns: [
          { width: 20, text: ''},
          { width: 240, text: 'Secretaría de Movilidad', fontSize: 14,bold: true}
        ]
      },
      { columns: [
          { width: 20, text: ''},
          { width: 230, text: 'Gobierno del Estado de Oaxaca', fontSize: 14,bold: true }
        ]
      },
      { columns: [
          { width: 20, text: ''},
          { width: 230, text: 'Unidad de Informática', fontSize: 12,bold: true }
        ]
      },
      { columns: [
          { width: 330, text: ''},
          { width: 230, text: 'OAXACA DE JUÁREZ, OAX, A 10 DE OCTUBRE DE 2019', fontSize: 8 }
        ]
      }
      ,
      { columns: [
           { width: '100%', text: 'INFORMACIÓN GENERAL DEL CONCESIONARIO', fontSize: 13,bold: true,alignment: 'center' }
        ]
      }
    ];
    return cabecera;
  }

  getTramites(){
    let tramites = [
            { columns: [
                { width: 40, text: '', margin: [0, 2, 0, 0]},
               ]
            },{ //aqui empieza DATOS DE UBICACION
                  canvas: [
                    {
                      type: 'rect',
                      x: 20,
                      y: 10,
                      w: 510,
                      h: 20,
                      color: '#f5f5f5',
                    },
                  ]
                },
            { columns: [
                { width: 20, text: ''},
                { width: 300, text: 'BITÁCORAS DE TRÁMITES', fontSize: 12,bold: true, margin: [0, -17, 0, 0]}
              ]
            },
          { columns: [
              { width: 40, text: '', margin: [0, 2, 0, 0]},
             ]
          },
          this.getBitacoradeTramites()

    ];
    return tramites;
  }


  getBitacoradeTramites(){

     let arrayParaTabla = [];
     for(var i = 0; i < 10; i++){
       if(i == 0){
         arrayParaTabla.push(
           [ {text: 'REFERENCIA', fontSize:9, bold: true,alignment: 'center' } ,
           {text: 'DESCRIPCIÓN DEL TRÁMITE', fontSize:9, bold: true,alignment: 'center' } ,
           { text: 'ESTATUS', fontSize:9, bold: true,alignment: 'center' }  ,
           { text: 'FECHA', fontSize:9, bold: true,alignment: 'center' } ,
           { text: 'MODELO', fontSize:9, bold: true,alignment: 'center' } ,
           { text: 'ESTATUS DEL VEHICULO', fontSize:9 , bold: true,alignment: 'center'}   ,
           { text: 'FECHA DEL IMP.', fontSize:9, bold: true,alignment: 'center' }  ,
           { text: 'ESTATUS DE IMP.', fontSize:9 , bold: true,alignment: 'center'}
           ]
         );
       }
        arrayParaTabla.push([
           {text: '142968', fontSize:7,alignment: 'center'} ,
          { text: 'RENOVACIÓN DE CONCESIÓN', fontSize:7,alignment: 'center'}  ,
          { text: 'Activo', fontSize:7,alignment: 'center' } ,
          { text: '27/11/2014', fontSize:7,alignment: 'center' } ,
          { text: '2014', fontSize:7,alignment: 'center' }   ,
          { text: 'Alta', fontSize:7,alignment: 'center' }  ,
          { text: '27/11/2014', fontSize:7,alignment: 'center' }  ,
          { text: 'Activo', fontSize:7,alignment: 'center' }
        ]
        );


     }


    let datosTablaReporteLocalidad =
      {
            style: 'tableExample',
             table: {
              headerRows: 1,
              widths: [ '11%','25%', '9%', '9%', '9%','15%','10%','10%'],
              body:  arrayParaTabla,
            },
        layout: 'noBorders'
     };
    return datosTablaReporteLocalidad;

  }

}
