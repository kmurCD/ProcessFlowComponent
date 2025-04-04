import * as React from "react";
import "./BodyFlowProcess.css";

import { ContextGeneral } from "../../context/ContextGeneral";
import { CircleButton } from "../circleButton/circleButton";


interface Props {
  onNewPhase: (value: boolean) => void;
  onSelect: (number: number) => void;
}

const BodyFlowProcess: React.FC<Props> = ({ onNewPhase, onSelect }) => {
  const { names, phase } = React.useContext(ContextGeneral);

  return (
    <div className="steps">
      {names.map((name, i) => {
        const number = i + 1;
        const isLast = i === names.length - 1;
        return (
          <div key={number} className="flow-container">
            {/* Logica para la implementación del texto "Estados de fase" */}
            <div className="text-container">
              <div
                className="text-content"
                style={{ height: isLast ? "100%" : "50%" }}
              >
                <li>{name}</li>
              </div>
              {/* Espaciador para alinear el texto */}
              {!isLast && <span className="span-space"> </span>}
            </div>
            {/* Logica para la implementación del Boton circular */}
            <div className="circle-progress-container">
              <CircleButton
                number={number}
                onSelect={() => onSelect(number)}
                onNewPhase={onNewPhase}
              ></CircleButton>
              {!isLast && (
                <div
                  className={`${phase <= number ? "progress-after" : ""} 
                    ${phase > number ? "progress-before" : ""}`}
                ></div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BodyFlowProcess;
