import * as React from "react";
import { Label } from "@fluentui/react-components";
import "./FlowProcess.css";

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
          const isRight = number % 2 !== 0; // Alternar posición de los labels

          return (
            <div className="circle-container" key={number}>
              {isRight && (
                <span
                  className="label right"
                  onClick={() => this.handleSelect(name)}
                >
                  {name}
                </span>
              )}
              <div className="circle">
                <div
                  className="circle-inside"
                  onClick={() => this.handleSelect(name)}
                >
                  {number}
                </div>
              </div>
              {!isRight && (
                <span
                  className="label left"
                  onClick={() => this.handleSelect(name)}
                >
                  {name}
                </span>
              )}
            </div>
          );
        })}
      </div>
    );
  }

  render(): React.ReactNode {
    return <div className="container">{this.renderSteps()}</div>;
  }
}
