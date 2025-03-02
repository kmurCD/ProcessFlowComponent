import * as React from "react";
import Flow from "./Flow";
import "./css/FlowProcess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface FlowProcessProps {
  phase: number;
  onPhaseValueSelect: (phaseValue: number) => void;
}

const FlowProcess: React.FC<FlowProcessProps> = ({
  phase,
  onPhaseValueSelect,
}) => {
  const names = [
    "Prospección",
    "Calificación de Oportunidad",
    "Levantamiento de requerimiento",
    "Elaboración de la Propuesta Técnica",
    "Entrega propuesta Técnica",
    "Presentación ejecutiva solución",
    "Aprobación propuesta Técnica",
    "Elaboración de la Propuesta Económica",
    "Entrega Propuesta Económica",
    "Negociación",
    "Formalización",
    "Cierre Ganada",
    "Ejecución",
    "Entregado",
  ];

  const [PhaseValue, setPhaseValue] = useState<number>(0);

  //* Al ejecutar onSelect, se actualiza selectedStep con el nuevo número.
  //* Esto provoca un re-render, enviando el nuevo valor a selectNumber en Flow.

  const onSelect = (number: number) => {
    setPhaseValue(number);
    onPhaseValueSelect(number); //! Enviar el valor al componente index
  };

  return (
    <div className="container-flowProcess">
      <p className="status">
        <span style={{ fontWeight: "bold", color: "black", fontSize: "15" }}>
          Estado actual:
        </span>
        <span style={{ color: "red", fontSize: "15" }}> {names[phase]}</span>
      </p>

      <div className="container-section">
        <Flow
          onSelect={onSelect}
          phase={phase}
          selectPhase={PhaseValue}
          names={names}
        />
      </div>
    </div>
  );
};

export default React.memo(FlowProcess);
