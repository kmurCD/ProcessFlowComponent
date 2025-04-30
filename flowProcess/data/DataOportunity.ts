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

  // Fase 2: Calificación de Oportunidad
  2: [
    { id: "parentcontactid", descripcion: "Contacto", contenido: null },
    { id: "proyectoComprometido", descripcion: "¿Proyecto comprometido?", contenido: false },
    { id: "presupuestoDefinidoEstimado", descripcion: "Presupuesto Definido/Estimado", contenido: 0 },
    { id: "procesoCompra", descripcion: "Proceso de compra", contenido: null },
    { id: "actividadescalificacion", descripcion: "Actividades", contenido: "" },
  ],

  // Fase 3: Levantamiento Tecnico
  3: [
    { id: "alcanceServiciosDefinido", descripcion: "Alcance servicios definido", contenido: false },
    { id: "cantidadDeUsuarios", descripcion: "Cantidad de usuarios", contenido: 0 },
    { id: "actividadeslevantamiento", descripcion: "Actividades", contenido: "" },
    { id: "documentoArquitectura", descripcion: "Documento de Arquitectura", contenido: "" },
  ],

  // Fase 4: Elaboración de la Propuesta Técnica
  4: [
    { id: "fechaEstimadaPresentacionPropuesta", descripcion: "Fecha estimada de presentación de la propuesta técnica", contenido: null },
    { id: "entendimientoPropuesta", descripcion: "Entendimiento de la Propuesta Técnica", contenido: null },
    { id: "documentoPropuestaTecnica", descripcion: "Documento Propuesta Técnica", contenido: "" },

  ],

  // Fase 5: Presentación de Propuesta Técnica
  5: [
    { id: "fechaAprobacionPropuesta", descripcion: "Fecha de aprobación de la propuesta técnica", contenido: null },
    { id: "evaluacionClientePropuesta", descripcion: "Evaluación cliente propuesta técnica", contenido: null },
  ],

  // Fase 6: Elaboración de la Propuesta Económica
  6: [
    { id: "fechaobjetivopropuestaeconomica", descripcion: "Fecha objetivo de la propuesta económica", contenido: null },
    { id: "precioObjetivo", descripcion: "Precio objetivo", contenido: 0 },
    { id: "estrategiaPrecios", descripcion: "Estrategia de precios", contenido: null },
  ],

  // Fase 7: Propuesta enviada al cliente
  7: [
    { id: "fechaEnvio", descripcion: "Fecha de envío", contenido: null },
    { id: "fechaSeguimiento", descripcion: "Fecha de seguimiento", contenido: null },
    { id: "montoRevenue", descripcion: "Monto Revenue", contenido: 0 },
    { id: "montoProfit", descripcion: "Monto Profit", contenido: 0 },
  ],

  // Fase 8: Negociación
  8: [
    { id: "fechaEstimadaCierre", descripcion: "Fecha estimada de cierre", contenido: null },
    { id: "fechaEstimadaFacturacion", descripcion: "Fecha estimada de facturación", contenido: null },
    { id: "brechasNegociacion", descripcion: "Brechas de negociación", contenido: null},
    { id: "variablesNegociacion", descripcion: "Variables de negociación", contenido: null},
  ],

  // Fase 9: Cierre Comercial
  9: [
    { id: "tipodedocumento", descripcion: "Tipo de documento", contenido: null },
    { id: "fechaTransferencia", descripcion: "Fecha de transferencia de Preventa a Postventa", contenido: null },
    { id: "fechaKickOff", descripcion: "Fecha de kick-off", contenido: null },
    { id: "equipoTrabajoDefinido", descripcion: "Equipo de trabajo definido", contenido: null },
  ],

  // Fase 10: Formalización
  10: [
    { id: "fechadocumentoAdjudicacion", descripcion: "Fecha del documento de adjudicación", contenido: null },
    { id: "descripciondocumentodeadjudicacion", descripcion: "Descripción documento de adjudicación", contenido: null },
    { id: "pasosaseguir", descripcion: "Pasos a seguir", contenido: null },
    { id: "fechaInicioProyecto", descripcion: "Fecha de inicio de proyecto", contenido: null },
  ],

  // Fase 11: Firma de contrato
  11: [
    { id: "evaluacionDesempenoTransligra", descripcion: "Evaluación desempeño Transligra", contenido: 0 },
    { id: "evaluacionDesempenoCliente", descripcion: "Evaluación desempeño cliente", contenido: 0 },
    { id: "fechaInicioEjecucion", descripcion: "Fecha de inicio de ejecución", contenido: null },
    { id: "interlocutorApropiado", descripcion: "Interlocutor apropiado", contenido: null },
    { id: "actaFinalEntrega", descripcion: "Acta final de entrega", contenido: false },
  ],
};