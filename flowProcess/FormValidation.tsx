import { Label, Button } from "@fluentui/react-components";
import * as React from "react";
import ErrorCircleFlow from "../FlowProcess/assets/error_flow.svg";
import { fieldsPhaseOportunity } from "./data/field_oportunity";

type FormValidationProps = {
  onNewPhase: (value: boolean) => void;
};

const FormValidation: React.FC<FormValidationProps> = ({ onNewPhase }) => {
  const fieldOportunity = fieldsPhaseOportunity[1];

  return (
    <div>
      {fieldOportunity.map((name, i) => (
        <div key={i} className="form-container">
          <div className="validation-form-container">
            <div className="label-form-validation">
              <Label>Requisito de oportunidad {name}</Label>
            </div>
            <span className="icon-form-validate">
              <ErrorCircleFlow />
            </span>
          </div>
        </div>
      ))}

      {/* Botones dentro del return */}
      <div>
        <Button className="informattion-button" onClick={() => onNewPhase(true)}>
          Fase siguiente
        </Button>
      </div>
      <div>
        <Button className="informattion-button" onClick={() => onNewPhase(false)}>
          Fase anterior
        </Button>
      </div>
    </div>
  );
};

export default FormValidation;
