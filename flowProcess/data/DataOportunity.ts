import { DataItem, Phase } from "./DataType";
export const namePhases = [
  "Prospección",
  "Calificación de Oportunidad",
  "Levantamiento Tecnico",
  "Elaboración de la Propuesta Técnica",
  /* "Entrega propuesta Técnica",*/
  "Presentación de Propuesta Técnica",
  /*"Aprobación propuesta Técnica",*/
  "Elaboración de la Propuesta Económica",
  /* "Entrega Propuesta Económica",*/
  "Negociación",
  "Cierre Comercial",
  "Formalización",
  "Firma de contrato",
  "Orden de Compra",
  /*"Entregado",*/
];

export const data: Record<number, DataItem[]> = {
  1: [],
  2: [
    { id: "description", descripcion: "Description", contenido: "" },
    { id: "parentcontactid", descripcion: "Contato", contenido: null },
    {
      id: "proyectoComprometido",
      descripcion: "Proyecto comprometido",
      contenido: false,
    },
    {
      id: "presupuestoDefinidoEstimado",
      descripcion: "Presupuesto Definido/Estimado",
      contenido: 0,
    },
    { id: "procesoCompra", descripcion: "Proceso de compra", contenido: null },
  ],
  3: [
    {
      id: "alcanceServiciosDefinido",
      descripcion: "Alcance servicios definido",
      contenido: false,
    },
    {
      id: "cantidadDeUsuarios",
      descripcion: "Cantidad de usuarios",
      contenido: 0,
    },
  ],
  4: [
    {
      id: "parametrosDecision",
      descripcion: "Parámetros de decisión",
      contenido: "",
    },
    {
      id: "fechaEstimadaPresentacionPropuesta",
      descripcion: "Fecha estimada presentación propuesta",
      contenido: null,
    },
    {
      id: "entendimientoPropuesta",
      descripcion: "Entendimiento de la propuesta",
      contenido: "",
    },
    {
      id: "estrategiaVenta",
      descripcion: "Estrategia de venta",
      contenido: "",
    },
  ] /*
        5: [
          { id: "documentoPresentacionEjecutiva", descripcion: "Documento de presentación ejecutiva", contenido: false },
          { id: "liderProyecto", descripcion: "Líder proyecto", contenido: false },
          { id: "usuarioLider", descripcion: "Usuario líder", contenido: false }
        ],*/,
  5: [
    {
      id: "fechaAprobacionPropuesta",
      descripcion: "Fecha aprobación propuesta técnica",
      contenido: null,
    },
    {
      id: "favorabilidadActores",
      descripcion: "Favorabilidad actores",
      contenido: "",
    },
    {
      id: "evaluacionClientePropuesta",
      descripcion: "Evaluación cliente propuesta técnica",
      contenido: "",
    },
  ],
  6: [
    {
      id: "fechaobjetivopropuestaeconomica",
      descripcion: "Fecha objetivo de propuesta económica",
      contenido: null,
    },
    {
      id: "estrategiaPrecios",
      descripcion: "Estrategia de precios",
      contenido: "",
    },
    { id: "precioObjetivo", descripcion: "Precio objetivo", contenido: 0 },
  ] /*
        8: [
          { id: "aprobacionCondicionesEspeciales", descripcion: "Aprobación condiciones especiales", contenido: false },
          { id: "preciosrevisadosyaprobados", descripcion: "Precios revisados y aprobados", contenido: false },
          { id: "cotizacionProveedores", descripcion: "Cotización proveedores", contenido: false }
        ],*/,
  7: [
    {
      id: "finaldecisiondate",
      descripcion: "Fecha de decisión final",
      contenido: null,
    },
    { id: "brechas", descripcion: "Brechas", contenido: "" },
    {
      id: "variablesdenegociacion",
      descripcion: "Variables de negociación",
      contenido: "",
    },
  ],
  8:  [
    {
      id: "tipodedocumento",
      descripcion: "Tipo de documento",
      contenido: null,
    },
    {
      id: "fechaTransferencia",
      descripcion: "Fecha de transferencia de Preventa",
      contenido: null,
    },
    { id: "fechaKickOff", descripcion: "Fecha de kick-off", contenido: null },
    {
      id: "equipoTrabajoDefinido",
      descripcion: "Equipo de trabajo definido",
      contenido: false,
    },
  ]
  ,
  9: [
    {
      id: "fechaDocumentoAdjudicacion",
      descripcion: "Fecha documento de adjudicación",
      contenido: null,
    },
    {
      id: "fechaInicioProyecto",
      descripcion: "Fecha de inicio de proyecto",
      contenido: null,
    },
    { id: "pasosaseguir", descripcion: "Pasos a seguir", contenido: "" },
    {
      id: "descripciondocumentodeadjudicacion",
      descripcion: "Descripción documento de adjudicación",
      contenido: "",
    },
  ],
  10: [
    {
      id: "fechadeiniciodeejecucion",
      descripcion: "Fecha de inicio de ejecución",
      contenido: null,
    },
    {
      id: "interlocutorApropiado",
      descripcion: "Interlocutor apropiado",
      contenido: null,
    },
    {
      id: "actaFinalEntrega",
      descripcion: "Acta final de entrega",
      contenido: false,
    },
  ],
  11: [
    /*
    { id: "evaluaciondesempenotransligra", descripcion: "Evaluación desempeño Transligra", contenido: 0 },
    { id: "evaluaciondesempenocliente", descripcion: "Evaluación desempeño cliente Transligra", contenido: 0 },*/
  ] /*
        12: []*/,
};
