import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import MainFlowProcess from "./component/mainFlowProcess/MainFlowProcess";
import { DataItem, DataType } from "./data/DataType";
import { data } from "./data/DataOportunity";

export class FlowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  /**========Variables========**/
  private notifyOutputChanged: () => void;
  phaseCurrent: number;
  phaseSelect: number;
  newPhase: number;
  rolContext: boolean;
  data: DataItem[];
  dataContext: ComponentFramework.Context<IInputs, IOutputs>;

  constructor() {
    /**=======Constructor inicializado=======**/
  }

  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    

    /**=======Inicializa el valor de la fase=======**/
    this.phaseCurrent = context.parameters.phase.raw ?? 1;
  }

  /**=======Selecion de fase - retornar el contexto de la Fase - validadar si alguno esta vacio =======**/
  private onPhaseSelect(value: number): {
    dataItems: DataItem[];
    validation: boolean;
  } {
    this.phaseSelect = value;
    console.log("Phase selected: ", this.phaseSelect);
    const dataItem = data[value] || [];
    let validation = true;

    
    for (const item of dataItem) {
      const param = this.dataContext.parameters as unknown as Record<
        string,
        { raw: number }
      >;
      const dataContext = param[`${item.id}`]?.raw ?? null;

      item.contenido = dataContext;

      if (Array.isArray(item.contenido) && item.contenido.length === 0) {
        item.contenido = null;
      }

      if (
        item.contenido === null ||
        item.contenido === undefined ||
        (typeof item.contenido === "boolean" && item.contenido === false) ||
        (typeof item.contenido === "string" && item.contenido === "")
      ) {
        validation = false;
      }
    }
    this.notifyOutputChanged();

    return { dataItems: dataItem, validation };
  }
  /**=======Nueva de fase=======**/
  private onNewPhase(value: boolean) {
    if (value == true) {
      if (this.phaseCurrent > 0 && this.phaseCurrent < 14) {
        this.newPhase = this.phaseCurrent + 1;
      } else {
        console.log("Cannot increment. Phase value is at its maximum (14).");
      }
    } else {
      if (this.phaseCurrent > 1 && this.phaseCurrent <= 14) {
        this.newPhase = this.phaseCurrent - 1;
        console.log("New phase value: " + this.newPhase);
      } else {
        console.log("Cannot decrement. Phase value is at its minimum (1).");
      }
    }
    this.onPhaseSelect(this.newPhase);
    this.notifyOutputChanged();
  }
  /**=======Obtiene la informacion del propietario=======**/
  private getOwnerInfo(): void {
    if (this.dataContext.userSettings) {
      const userSettings = this.dataContext.userSettings.securityRoles;
      const adminRoleId = "7312df10-8be7-ef11-9342-000d3a5b0e8f";

      const isAdmin = userSettings.some((role) => role === adminRoleId);
      console.log("¿Es administrador?:", isAdmin);

      if (isAdmin) {
        this.rolContext = true;
      }
    } else {
      console.error("userSettings is undefined");
    }
  }

  /**=======Actualiza la fase=======**/
  private onUpdatePhase(value: number) {
    if (value != this.phaseCurrent) {
      this.phaseCurrent = value;
      this.notifyOutputChanged();
    }
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    this.dataContext = context;
    this.getOwnerInfo();
    this.onUpdatePhase(context.parameters.phase.raw ?? 1);
    /**=======Renderiza el componente=======**/
    return React.createElement(MainFlowProcess, {
      phase: this.phaseCurrent,
      role: this.rolContext,
      onPhaseSelect: (value: number) => {
        const { dataItems, validation: isValid } = this.onPhaseSelect(value);
        return { dataItems, isValid };
      },
      onNewPhase: (value: boolean) => this.onNewPhase(value),
    });
  }

  public getOutputs(): IOutputs {
    return {
      controlphase: this.phaseSelect,
      phase: this.newPhase > 0 ? this.newPhase : this.phaseCurrent,
    };
  }

  public destroy(): void {
    /**=======Destruye el componente
     * y libera los recursos=======**/
  }
}
