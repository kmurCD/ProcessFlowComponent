import { IInputs, IOutputs } from "./generated/ManifestTypes";
import FlowProcess from "./FlowProcess";
import * as React from "react";

export class flowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private statusValue = 0;
  private selectedStepNumer: number;

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
    this.selectedStepNumer = 0;
  }

  public updateView(
    context: ComponentFramework.Context<IInputs>
  ): React.ReactElement {
    const newStatusValue = context.parameters.Phase.raw ?? 1;

    // Solo actualizar si el valor realmente cambió
    if (this.statusValue !== newStatusValue) {
      this.statusValue = newStatusValue;
      console.log("Phase value:", context.parameters.Phase.raw);
      this.notifyOutputChanged();
    }
    return React.createElement(FlowProcess, {
      phase: this.statusValue,
      onStepSelect: (stepNumber: number) => {
        this.selectedStepNumer = stepNumber;
        console.log("selecionado" +this.selectedStepNumer)
        this.notifyOutputChanged();
      },
    });
  }

 
  public getOutputs(): IOutputs {
    return {
      ControlPhase: this.selectedStepNumer
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
}
}
