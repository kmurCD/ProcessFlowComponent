import * as React from "react";
import { useState } from "react";
import CheckCircleIcon from "../flowProcess/src/check_circle.svg";
import RadioButtonIcon from "../flowProcess/src/radio_button.svg";

interface Props {
  onSelect: (value: string ,stepNumber: number) => void;
  selectedStep: string;
  phase: number;
}

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

const Flow: React.FC<Props> = ({ onSelect, selectedStep, phase }) => {
  return (
    <div className="steps">
      {names.map((name, i) => {
        const number = i + 1;
        const isLast = i === names.length - 1;
        return (
          <div key={number} className="flow-container">
            
            <div className="label-container">
              <div className="text-container">
                <li className="label-content" onClick={() => onSelect(name,number)}>
                  {name}
                </li>
                <li className="label-space"></li>
              </div>
            </div>
            <div className="circle-progress-container">
              <div
                className={`circle-container 
                   ${selectedStep === name ? "circle-select" : "inactive"}
                 ${
                   phase === number
                     ? "circle-container circle-active"
                     : "inactive"
                 }
                 ${phase < number ? "circle-container-1" : "inactive"}
                 ${phase > number ? " circle-container-2" : "inactive"}
                  `}
                onClick={() => {
                  onSelect(name,number);
                }}
              >
                <span className="circle-inside">
                  {phase < number ? (
                    <>{number}</>
                  ) : phase > number ? (
                    <>
                      <CheckCircleIcon />
                    </>
                  ) : (
                    <>
                      <RadioButtonIcon />
                    </>
                  )}
                </span>
              </div>
              {!isLast && (
                <div className="progress-container">
                  <div
                    className="progress bg-secondary"
                    role="progressbar"
                  ></div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flow;
