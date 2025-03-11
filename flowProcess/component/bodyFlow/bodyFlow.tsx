import * as React from "react";
import "../bodyFlow/bodyFlow.css";
import { CircleButton } from "../circleButton/circleButton";


interface Props {
  onNewPhase: (value: boolean) => void;
  phase: number;
  selectPhase: number;
  names: string[];
  onSelect: (value: number) => void;
}

const BodyFlow: React.FC<Props> = ({
  phase,
  selectPhase,
  names,
  onNewPhase,
  onSelect,
}) => {
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
                phase={phase}
                selectPhase={selectPhase}
                number={number}
                onSelect={() => onSelect(number)}
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

export default BodyFlow;

