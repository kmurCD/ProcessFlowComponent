import * as React from "react";
import Flow from "./Flow";
import "./css/FlowProcess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface FlowProcessProps {
    phase: number;
}

const FlowProcess: React.FC<FlowProcessProps> =  ({ phase }:{ phase: number })=> {
  const [selectedStep, setSelectedStep] = useState<string>("");

  const handleStepSelect = (value: string) => {
    setSelectedStep(value);
    console.log(`Paso seleccionado: ${value}`);
  };

  return (
    <div className="container">
      <div className="container-section">
      <Flow onSelect={handleStepSelect} selectedStep={selectedStep} phase={phase} />
      </div>
      <p className="estado">
        Estado Actual: {selectedStep || "Ningún paso seleccionado"}
      </p>
    </div>
  );
};

export default React.memo(FlowProcess)
