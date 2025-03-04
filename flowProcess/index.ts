import { IInputs, IOutputs } from "./generated/ManifestTypes";
import FlowProcess from "./FlowProcess";
import * as React from "react";

export class flowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private phaseValue = 0;
  private phaseValueSelect: number;
    newPhaseValue: number;

  constructor() {
    // Constructor inicializado
}
  public init(
    context: ComponentFramework.Context<IInputs>,
    notifyOutputChanged: () => void,
    state: ComponentFramework.Dictionary
  ): void {
    this.notifyOutputChanged = notifyOutputChanged;
    this.updateView(context);
    this.phaseValueSelect = 0;
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const newPhaseValue = context.parameters.Phase.raw ?? 1;

    if (this.phaseValue !== newPhaseValue) {
      this.phaseValue = newPhaseValue;
      console.log("Phase value: ", context.parameters.Phase.raw);
      this.notifyOutputChanged();
    }

    return React.createElement(FlowProcess, {
      phase: this.phaseValue,

      //* Actualizar el valor de la fase seleccionada 
      onPhaseValueSelect: (value: number) => {
        this.phaseValueSelect = value;
    
        console.log("Phase Select: " +this.phaseValueSelect)

        this.notifyOutputChanged();
      },  onNewPhaseValue: () => {
        this.newPhaseValue = this.phaseValue + 1;  // Incrementa el valor en +1
        console.log("New phase value: " + this.newPhaseValue);
  
        this.notifyOutputChanged();  // Notifica el cambio a Dynamics 365
      }

    });
  }

 
  public getOutputs(): IOutputs {
    return {
      ControlPhase: this.phaseValueSelect,
      Phase: this.newPhaseValue > 0 ? this.newPhaseValue : this.phaseValue, 
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
}
}