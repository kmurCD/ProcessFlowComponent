import * as React from "react";
import { useState } from "react";

interface Props {
  onSelect: (value: string) => void;
  selectedStep: string;
  phase: number;
}
const CheckCircleIcon = require("../flowProcess/src/check_circle.svg").default;
const RadioButtonIcon = require("../flowProcess/src/radio_button.svg").default;
const names = [
  "Inicio",
  "Revisión",
  "Aprobación",
  "Firma",
  "Entrega",
  "Seguimiento",
  "Cierre",
  "Evaluación",
  "Reporte",
  "Feedback",
  "Análisis",
  "Finalización",
  "Publicación",
  "Archivo",
];

const Flow: React.FC<Props> = ({ onSelect, selectedStep, phase }) => {
  console.log(phase);
  return (
    <div className="steps">
      {names.map((name, i) => {
        const number = i + 1;
        const isLast = i === names.length - 1; // El último elemento no tiene barra
        return (
          <div key={number} className="flow-container">
            <div className="circle-progress-container">
              <div
                className={`circle-container 
                   ${selectedStep === name ? "circle-select" : "inactive"}
                 ${
                   phase === number
                     ? "circle-active circle-container-active"
                     : "inactive"
                 }
                 ${phase < number ? "circle-container-1" : "inactive"}
                 ${phase > number ? " circle-container-2" : "inactive"}
                  `}
                onClick={() => onSelect(name)}
              >
                <span className="circle-inside">
                  {phase < number ? (
                    <>
                      {number}
                    </>
                  ) : phase > number ? (
                    <>
                      <CheckCircleIcon width={25} height={25} /> 
                    </>
                  ) : (
                    <>
                     <RadioButtonIcon width={20} height={25} />
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
            <div className="label-container">
              <div className="text-container">
                <li className="label right" onClick={() => onSelect(name)}>
                  {name}
                </li>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Flow;
