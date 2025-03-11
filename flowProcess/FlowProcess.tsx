import * as React from "react";
import Flow from "./component/bodyFlow/bodyFlow";
import { useState } from "react";
import { namePhases } from "./data/field_oportunity";
import "../flowProcess/FlowProcess.css";

interface flowProcessProps {
  phase: number;
  onPhaseValueSelect: (phaseValue: number) => void;
  onNewPhase: (value: boolean) => void;
}

const ComponentFlowProcess: React.FC<flowProcessProps> = ({
  phase,
  onPhaseValueSelect,
  onNewPhase,
}) => {
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
        <span style={{ color: "red", fontSize: "15", textAlign: "center" }}>
          {names[phase - 1]}
        </span>
      </div>

      <div className="container-section">
        <Flow
          phase={phase}
          selectPhase={phaseValue}
          names={names}
          onNewPhase={onNewPhase}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default React.memo(ComponentFlowProcess);
