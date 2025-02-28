import * as React from "react";
import "./FlowProcess.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

/*Obtjeto*/
interface Props {
  onSelect: (value: string) => void;
}

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
export class Flow extends React.Component<Props> {
  handleSelect = (name: string) => {
    this.props.onSelect(name); // Llamamos a la función pasada como prop
  };

  renderSteps() {
    return (
      <div className="steps">
        {names.map((name, i) => {
          const number = i + 1;
          const isLast = i === names.length - 1; // Último elemento no necesita barra

          return (
            <div key={number} className="flow-container">
              <div className="circle-progress-container">
                <div className="circle-container">
                  <span
                    className="circle-inside"
                    onClick={() => this.handleSelect(name)}
                  >
                    {number}
                  </span>
                </div>
                {/* Agregar barra de conexión si no es el último */}
              {!isLast && (
                <div className="progress-container">
                  <div
                    className="progress bg-secondary"
                    role="progressbar"
                  ></div>
                </div>
              )}
              </div>
              <div className="label-container ">
              <div className="text-container">
                <li
                  className="label right"
                  onClick={() => this.handleSelect(name)}
                >
                  {name}
                </li>
              </div>
              </div>
              

              
            </div>
          );
        })}
      </div>
    );
  }

  render(): React.ReactNode {
    return (
      <div className="container">
        <div>{this.renderSteps()}</div>
      </div>
    );
  }
}
