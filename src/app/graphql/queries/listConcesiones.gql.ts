import gql from 'graphql-tag';

const LISTAR_CONCESIONARIOS = gql`
query listConcesiones($entrada: String, $opcion: Int, $top: Int) {
  concesiones(entrada: $entrada, opcion: $opcion, top: $top) {
    id
     acuerdo
     fechaAcuerdo
     fechaVencimiento
     fechaCaptura
     vigencia
     observaciones
     observacionesActa
     ruta
     fechaInicio
     unidadesAmparadas
     modalidad {
       id
       nombre
       descripcion
       estatus
       abreviatura
     }
     sitio {
       id
       nombre
       estatus
     }
     nuc
     estatus
     concesionario {
       id
       tipoPersona
       nombre
       primerApellido
       segundoApellido
       curp
       rfc
       razonSocial
       representanteLegal
       localidad {
         id
         nombre
         municipio {
           id
           nombre
           distrito {
             id
             nombre
             region {
               id
               nombre
             }
           }
         }
       }
     }
     condiciones {
       vigente
       bloqueado
     }
   }
 },
`;

export { LISTAR_CONCESIONARIOS };
