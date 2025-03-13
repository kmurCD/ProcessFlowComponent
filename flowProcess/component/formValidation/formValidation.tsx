import * as React from "react";
import ErrorCircleFlow from "../formValidation/assets/error_flow.svg";
import { fieldsPhaseOportunity } from "../../data/data_oportunity";
import { ToggleButton } from "@fluentui/react-components";
import "../formValidation/formValidation.css"

interface FormValidationProps {
  onNewPhase: (value: boolean) => void;
}

const FormValidation: React.FC<FormValidationProps> = ({ onNewPhase }) => {
  const fieldOportunity = fieldsPhaseOportunity[1];

  return (
    <div className="form-phase-container">
      <div className="form-phase">
        {fieldOportunity.map((name, i) => (
          <div key={i} className="form-validation-container">
            <div className="label-form-container">
              <div className="label-form-validation">{name}</div>
              <span className="icon-form-validate">
                <ErrorCircleFlow />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormValidation;
