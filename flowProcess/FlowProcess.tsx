import * as React from "react";
import Flow from "./Flow";
import "./css/FlowProcess.css";
import { useState } from "react";
import { namePhases } from "./data/field_oportunity";
interface FlowProcessProps {
  phase: number;
  onPhaseValueSelect: (phaseValue: number) => void;
  onNewPhase: (value: boolean) => void;
}

const ComponentFlowProcess: React.FC<FlowProcessProps> = ({
  phase,
  onPhaseValueSelect,
  onNewPhase,
}) => {
  /**Declaraciones */

  const [phaseValue, setPhaseValue] = useState<number>(0);
  const names = namePhases[1];

  //* Al ejecutar onSelect, se actualiza selectedStep con el nuevo número.
  //* Esto provoca un re-render, enviando el nuevo valor a selectNumber en Flow.

  const onSelect = (number: number) => {
    setPhaseValue(number);
    onPhaseValueSelect(number); //! Enviar el valor al componente index
  };

  return (
    <div className="container-flowProcess">
      <div className="status">
        <span style={{ fontWeight: "bold", color: "black", fontSize: "15" }}>
          Estado actual:
        </span>
        <span style={{ color: "red", fontSize: "15" }}>{names[phase - 1]}</span>
      </div>

      <div className="container-section">
        <Flow
          onSelect={onSelect}
          phase={phase}
          selectPhase={phaseValue}
          names={names}
          onNewPhase={onNewPhase}
        />
      </div>
    </div>
  );
};

export default React.memo(ComponentFlowProcess);
