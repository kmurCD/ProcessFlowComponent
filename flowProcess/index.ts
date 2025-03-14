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
  phaseCurrent: number ;
  phaseSelect: number ;
  newPhase: number ;
  dataContext: ComponentFramework.Context<IInputs>;

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
    console.log("Phase value: ", this.phaseCurrent);
  }

  /**=======Selecion de fase y retornar el tipo de dato=======**/
  private onPhaseSelect(value: number): DataItem[] {
    this.phaseSelect = value;
    console.log("Phase selected: ", this.phaseSelect);

    

    const dataItem = data[value] || [];

    dataItem.forEach((item) => {
      const param = (this.dataContext.parameters as unknown) as Record<string, { raw: number }>;
      const dataContext = param[`${item.id}`]?.raw ?? null;
      
      item.contenido =  dataContext;
      console.log("Data:", dataItem);
    });

    this.notifyOutputChanged();

    return dataItem;
  }

  /**=======Nueva de fase=======**/
  private onNewPhase(value: boolean) {
    if (value == true) {
      if (this.phaseCurrent > 0 && this.phaseCurrent < 14) {
        this.newPhase = this.phaseCurrent + 1;
        console.log("New phase value: " + this.newPhase);
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

    this.notifyOutputChanged();
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
    this.onUpdatePhase(context.parameters.phase.raw ?? 1);

    /**=======Renderiza el componente=======**/
    return React.createElement(MainFlowProcess, {
      phase: this.phaseCurrent,
      onPhaseSelect: (value: number) => this.onPhaseSelect(value),
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
