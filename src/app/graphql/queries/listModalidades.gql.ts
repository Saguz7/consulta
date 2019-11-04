import gql from 'graphql-tag';

const LISTAR_MODALIDADES = gql`
query getModalidades {
  modalidades {
    id
    nombre
    descripcion
    estatus
    abreviatura
  }
},
`;

export { LISTAR_MODALIDADES };
