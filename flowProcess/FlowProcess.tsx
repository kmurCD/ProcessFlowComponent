import * as React from "react";
import Flow from "./Flow";
import "./css/FlowProcess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

interface FlowProcessProps {
    phase: number;
    onStepSelect: (stepNumber: number) => void;
}

const FlowProcess: React.FC<FlowProcessProps> =  ({ phase,onStepSelect })=> {


  const [selectedStep, setSelectedStep] = useState<string>("");
  

  
  const handleStepSelect = (value: string, number: number) => {
    setSelectedStep(value);
    onStepSelect(number);
    console.log(`Paso seleccionado: ${number}`);
  };

  return (
    <div className="container-flowProcess">
       <p className="status">
        Estado Actual: {selectedStep || "Ningún paso seleccionado"}
      </p>
      <div className="container-section">
      <Flow onSelect={handleStepSelect} selectedStep={selectedStep} phase={phase} />
      </div>
    </div>
  );
};

export default React.memo(FlowProcess)
