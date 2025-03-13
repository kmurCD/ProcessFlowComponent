import { IInputs, IOutputs } from "./generated/ManifestTypes";
import ComponentFlowProcess from "./FlowProcess";
import * as React from "react";
import { ContactValue } from "./entity/ContactValue";
import { data } from "./data/data_oportunity";
import { Phase } from "./data/data_type";

export class FlowProcess
  implements ComponentFramework.StandardControl<IInputs, IOutputs>
{
  private notifyOutputChanged: () => void;
  private phaseValue = 0;
  private phaseValueSelect: number;
  private newValue: number;

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
    const actuallyPhaseValue = context.parameters.Phase.raw ?? 1;


    if (this.phaseValue !== actuallyPhaseValue) {
      this.phaseValue = actuallyPhaseValue;
      console.log("Phase value: ", context.parameters.Phase.raw);
      this.notifyOutputChanged();
    }



    return React.createElement(ComponentFlowProcess, {
      phase: this.phaseValue,

      //! Logica de seleción
      onPhaseValueSelect: (value: number) => {
        this.phaseValueSelect = value;

        Object.values(Phase).forEach((key) => {
          if (typeof key === 'number' && key === (this.phaseValueSelect as Phase)) {
            console.log(`Datos para la fase ${Phase[key]}:`, data[key]);
          }

        })



        console.log("Phase Select: " + this.phaseValueSelect);
        this.notifyOutputChanged();
      },
      //! Logica para pasar a siguiente phase
      onNewPhase: (value: boolean) => {
        if (value == true) {
          if (this.phaseValue > 0 && this.phaseValue < 14) {
            this.newValue = this.phaseValue + 1; // Incrementa el valor en +1
            console.log("New phase value: " + this.newValue);
          } else {
            console.log("Cannot increment. Phase value is at its maximum (14).");
          }
          
        } else { // value == false
          //! Logica para pasar a siguiente phase
          if (this.phaseValue > 1 && this.phaseValue <= 14) {
            this.newValue = this.phaseValue - 1; // Decrementa el valor en -1
            console.log("New phase value: " + this.newValue);
          } else {
            console.log("Cannot decrement. Phase value is at its minimum (1).");
          }
        }
        this.notifyOutputChanged(); // Notifica el cambio a Dynamics 365
      },
    });
  }

  public getOutputs(): IOutputs {
    return {
      centella_controlphase: this.phaseValueSelect,
      Phase: this.newValue > 0 ? this.newValue : this.phaseValue,
    };
  }

  public destroy(): void {
    // Cleanup logic if needed
  }
}
