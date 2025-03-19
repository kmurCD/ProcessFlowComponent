/*
*This is auto generated from the ControlManifest.Input.xml file
*/

// Define IInputs and IOutputs Type. They should match with ControlManifest.
export interface IInputs {
    phase: ComponentFramework.PropertyTypes.OptionSetProperty;
    controlphase: ComponentFramework.PropertyTypes.WholeNumberProperty;
    userSettings: ComponentFramework.PropertyTypes.StringProperty;
    description: ComponentFramework.PropertyTypes.StringProperty;
    parentcontactid: ComponentFramework.PropertyTypes.LookupProperty;
    proyectoComprometido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    presupuestoDefinidoEstimado: ComponentFramework.PropertyTypes.NumberProperty;
    procesoCompra: ComponentFramework.PropertyTypes.OptionSetProperty;
    alcanceServiciosDefinido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    cantidadDeUsuarios: ComponentFramework.PropertyTypes.WholeNumberProperty;
    parametrosDecision: ComponentFramework.PropertyTypes.StringProperty;
    fechaEstimadaPresentacionPropuesta: ComponentFramework.PropertyTypes.DateTimeProperty;
    entendimientoPropuesta: ComponentFramework.PropertyTypes.StringProperty;
    estrategiaVenta: ComponentFramework.PropertyTypes.StringProperty;
    documentoPresentacionEjecutiva: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    liderProyecto: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    usuarioLider: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    fechaAprobacionPropuesta: ComponentFramework.PropertyTypes.DateTimeProperty;
    favorabilidadActores: ComponentFramework.PropertyTypes.StringProperty;
    evaluacionClientePropuesta: ComponentFramework.PropertyTypes.StringProperty;
    fechaobjetivopropuestaeconomica: ComponentFramework.PropertyTypes.DateTimeProperty;
    estrategiaPrecios: ComponentFramework.PropertyTypes.StringProperty;
    precioObjetivo: ComponentFramework.PropertyTypes.NumberProperty;
    aprobacionCondicionesEspeciales: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    preciosrevisadosyaprobados: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    cotizacionProveedores: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    finaldecisiondate: ComponentFramework.PropertyTypes.DateTimeProperty;
    brechas: ComponentFramework.PropertyTypes.StringProperty;
    variablesdenegociacion: ComponentFramework.PropertyTypes.StringProperty;
    fechaDocumentoAdjudicacion: ComponentFramework.PropertyTypes.DateTimeProperty;
    fechaInicioProyecto: ComponentFramework.PropertyTypes.DateTimeProperty;
    pasosaseguir: ComponentFramework.PropertyTypes.StringProperty;
    descripciondocumentodeadjudicacion: ComponentFramework.PropertyTypes.StringProperty;
    fechadeiniciodeejecucion: ComponentFramework.PropertyTypes.DateTimeProperty;
    interlocutorApropiado: ComponentFramework.PropertyTypes.LookupProperty;
    tipodedocumento: ComponentFramework.PropertyTypes.OptionSetProperty;
    fechaTransferencia: ComponentFramework.PropertyTypes.DateTimeProperty;
    fechaKickOff: ComponentFramework.PropertyTypes.DateTimeProperty;
    equipoTrabajoDefinido: ComponentFramework.PropertyTypes.TwoOptionsProperty;
    evaluaciondesempenotransligra: ComponentFramework.PropertyTypes.WholeNumberProperty;
    evaluaciondesempenocliente: ComponentFramework.PropertyTypes.WholeNumberProperty;
    actaFinalEntrega: ComponentFramework.PropertyTypes.TwoOptionsProperty;
}
export interface IOutputs {
    phase?: number;
    controlphase?: number;
    userSettings?: string;
    description?: string;
    parentcontactid?: ComponentFramework.LookupValue[];
    proyectoComprometido?: boolean;
    presupuestoDefinidoEstimado?: number;
    procesoCompra?: number;
    alcanceServiciosDefinido?: boolean;
    cantidadDeUsuarios?: number;
    parametrosDecision?: string;
    fechaEstimadaPresentacionPropuesta?: Date;
    entendimientoPropuesta?: string;
    estrategiaVenta?: string;
    documentoPresentacionEjecutiva?: boolean;
    liderProyecto?: boolean;
    usuarioLider?: boolean;
    fechaAprobacionPropuesta?: Date;
    favorabilidadActores?: string;
    evaluacionClientePropuesta?: string;
    fechaobjetivopropuestaeconomica?: Date;
    estrategiaPrecios?: string;
    precioObjetivo?: number;
    aprobacionCondicionesEspeciales?: boolean;
    preciosrevisadosyaprobados?: boolean;
    cotizacionProveedores?: boolean;
    finaldecisiondate?: Date;
    brechas?: string;
    variablesdenegociacion?: string;
    fechaDocumentoAdjudicacion?: Date;
    fechaInicioProyecto?: Date;
    pasosaseguir?: string;
    descripciondocumentodeadjudicacion?: string;
    fechadeiniciodeejecucion?: Date;
    interlocutorApropiado?: ComponentFramework.LookupValue[];
    tipodedocumento?: number;
    fechaTransferencia?: Date;
    fechaKickOff?: Date;
    equipoTrabajoDefinido?: boolean;
    evaluaciondesempenotransligra?: number;
    evaluaciondesempenocliente?: number;
    actaFinalEntrega?: boolean;
}
