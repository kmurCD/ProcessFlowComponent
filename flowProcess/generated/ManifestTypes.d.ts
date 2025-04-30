/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    phase: ComponentFramework.PropertyTypes.OptionSetProperty;
    controlphase: ComponentFramework.PropertyTypes.WholeNumberProperty;
    userSettings: ComponentFramework.PropertyTypes.StringProperty;
    parentcontactid: ComponentFramework.PropertyTypes.LookupProperty;
    proyectoComprometido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    presupuestoDefinidoEstimado: ComponentFramework.PropertyTypes.NumberProperty;
    procesoCompra: ComponentFramework.PropertyTypes.OptionSetProperty;
    actividadescalificacion: ComponentFramework.PropertyTypes.StringProperty;
    alcanceServiciosDefinido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    cantidadDeUsuarios: ComponentFramework.PropertyTypes.WholeNumberProperty;
    actividadeslevantamiento: ComponentFramework.PropertyTypes.StringProperty;
    documentoArquitectura: ComponentFramework.PropertyTypes.StringProperty;
    fechaEstimadaPresentacionPropuesta: ComponentFramework.PropertyTypes.DateTimeProperty;
    entendimientoPropuesta: ComponentFramework.PropertyTypes.OptionSetProperty;
    documentoPropuestaTecnica: ComponentFramework.PropertyTypes.StringProperty;
    fechaAprobacionPropuesta: ComponentFramework.PropertyTypes.DateTimeProperty;
    evaluacionClientePropuesta: ComponentFramework.PropertyTypes.OptionSetProperty;
    fechaobjetivopropuestaeconomica: ComponentFramework.PropertyTypes.DateTimeProperty;
    precioObjetivo: ComponentFramework.PropertyTypes.NumberProperty;
    estrategiaPrecios: ComponentFramework.PropertyTypes.OptionSetProperty;
    fechaEnvio: ComponentFramework.PropertyTypes.DateTimeProperty;
    fechaSeguimiento: ComponentFramework.PropertyTypes.DateTimeProperty;
    montoRevenue: ComponentFramework.PropertyTypes.NumberProperty;
    montoProfit: ComponentFramework.PropertyTypes.NumberProperty;
    fechaEstimadaCierre: ComponentFramework.PropertyTypes.DateTimeProperty;
    fechaEstimadaFacturacion: ComponentFramework.PropertyTypes.DateTimeProperty;
    brechasNegociacion: ComponentFramework.PropertyTypes.OptionSetProperty;
    variablesNegociacion: ComponentFramework.PropertyTypes.OptionSetProperty;
    tipodedocumento: ComponentFramework.PropertyTypes.OptionSetProperty;
    fechaTransferencia: ComponentFramework.PropertyTypes.DateTimeProperty;
    fechaKickOff: ComponentFramework.PropertyTypes.DateTimeProperty;
    equipoTrabajoDefinido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    fechadocumentoAdjudicacion: ComponentFramework.PropertyTypes.DateTimeProperty;
    descripciondocumentodeadjudicacion: ComponentFramework.PropertyTypes.OptionSetProperty;
    pasosaseguir: ComponentFramework.PropertyTypes.OptionSetProperty;
    fechaInicioProyecto: ComponentFramework.PropertyTypes.DateTimeProperty;
    evaluacionDesempenoTransligra: ComponentFramework.PropertyTypes.WholeNumberProperty;
    evaluacionDesempenoCliente: ComponentFramework.PropertyTypes.WholeNumberProperty;
    fechaInicioEjecucion: ComponentFramework.PropertyTypes.DateTimeProperty;
    interlocutorApropiado: ComponentFramework.PropertyTypes.LookupProperty;
    actaFinalEntrega: ComponentFramework.PropertyTypes.TwoOptionsProperty;
}
export interface IOutputs {
    phase?: number;
    controlphase?: number;
    userSettings?: string;
    parentcontactid?: ComponentFramework.LookupValue[];
    proyectoComprometido?: boolean;
    presupuestoDefinidoEstimado?: number;
    procesoCompra?: number;
    actividadescalificacion?: string;
    alcanceServiciosDefinido?: boolean;
    cantidadDeUsuarios?: number;
    actividadeslevantamiento?: string;
    documentoArquitectura?: string;
    fechaEstimadaPresentacionPropuesta?: Date;
    entendimientoPropuesta?: number;
    documentoPropuestaTecnica?: string;
    fechaAprobacionPropuesta?: Date;
    evaluacionClientePropuesta?: number;
    fechaobjetivopropuestaeconomica?: Date;
    precioObjetivo?: number;
    estrategiaPrecios?: number;
    fechaEnvio?: Date;
    fechaSeguimiento?: Date;
    montoRevenue?: number;
    montoProfit?: number;
    fechaEstimadaCierre?: Date;
    fechaEstimadaFacturacion?: Date;
    brechasNegociacion?: number;
    variablesNegociacion?: number;
    tipodedocumento?: number;
    fechaTransferencia?: Date;
    fechaKickOff?: Date;
    equipoTrabajoDefinido?: boolean;
    fechadocumentoAdjudicacion?: Date;
    descripciondocumentodeadjudicacion?: number;
    pasosaseguir?: number;
    fechaInicioProyecto?: Date;
    evaluacionDesempenoTransligra?: number;
    evaluacionDesempenoCliente?: number;
    fechaInicioEjecucion?: Date;
    interlocutorApropiado?: ComponentFramework.LookupValue[];
    actaFinalEntrega?: boolean;
}
