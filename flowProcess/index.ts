import { IInputs, IOutputs } from "./generated/ManifestTypes";
import * as React from "react";
import FlowProcessComponent from "./FlowProcess";

export class FlowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private phaseValue = 0;
  private phaseValueSelect: number;
  private nexPhaseValue: number;

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
    const ActuallyPhaseValue = context.parameters.Phase.raw ?? 1;

    if (this.phaseValue !== ActuallyPhaseValue) {
      this.phaseValue = ActuallyPhaseValue;
      console.log("Actually phase value: "+ this.phaseValue);
      this.notifyOutputChanged();
    }

    return React.createElement(FlowProcessComponent, {
      phase: this.phaseValue,

      //* Actualizar el valor de la fase seleccionada 
      onPhaseValueSelect: (value: number) => {
        this.phaseValueSelect = value;
    
        console.log("Phase Select: " +this.phaseValueSelect)

        this.notifyOutputChanged();

      },  onNewPhaseValue: () => {
      if(this.phaseValue > 0 && this.phaseValue <=13 )

        this.nexPhaseValue = this.phaseValue + 1;  
        console.log("New phase value: " + this.nexPhaseValue);
  
        this.notifyOutputChanged();  
      }

    });
  }

 
  public getOutputs(): IOutputs {
    return {
      ControlPhase: this.phaseValueSelect,
      Phase: this.nexPhaseValue > 0 ? this.nexPhaseValue : this.phaseValue, 
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
}
}