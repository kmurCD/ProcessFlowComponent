import { IInputs, IOutputs } from "./generated/ManifestTypes";
import FlowProcess from "./FlowProcess";
import * as React from "react";

export class flowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private phaseValue = 0;
  private phaseValueSelect: number;

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
      },
    });
  }

 
  public getOutputs(): IOutputs {
    return {
      ControlPhase: this.phaseValueSelect
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
}
}
