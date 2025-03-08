import {
  Label,
  Popover,
  PopoverTrigger,
  PopoverSurface,
  FluentProvider,
  teamsLightTheme,
  Button,
} from "@fluentui/react-components";
import * as React from "react";
import CheckCircleFlow from "../FlowProcess/assets/check_circle_flow.svg";
import RadioCircleFlow from "../FlowProcess/assets/radio_button.svg";
import FormValidation from "./FormValidation";


interface Props {
  onSelect: (stepNumber: number) => void;
  onNewPhase: (value: boolean) => void;
  phase: number;
  selectPhase: number;
  names: string[];
}

const Flow: React.FC<Props> = ({
  onSelect,
  phase,
  selectPhase,
  names,
  onNewPhase,
}) => {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="steps">
        <div
          style={{ width: "300px", height: "400px", backgroundColor: "green" }}
        >
          <FormValidation onNewPhase={onNewPhase} />
        </div>

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
                  onClick={() => onSelect(number)}
                >
                  <li>{name}</li>
                </div>{" "}
                {/* Espaciador para alinear el texto */}
                {!isLast && <span className="span-space"> </span>}
              </div>

              {/* Logica para la implementación del Boton */}
              <div className="circle-progress-container">
                <Popover withArrow positioning={{ position: "before" }}>
                  <PopoverTrigger disableButtonEnhancement>
                    <button
                      type="button"
                      className={`circle-container 
                      ${selectPhase === number ? "circle-select" : ""}
                      ${phase === number
                          ? "circle-container circle-active"
                          : "inactive"
                        }
                      ${phase < number ? "circle-container-1" : ""}
                      ${phase > number ? "circle-container-2" : ""}
                    `}
                      onClick={() => onSelect(number)}
                    >
                      {/* Logica para la implementación de los iconos */}
                      <style></style>
                      <span className="circle-content">
                        {phase < number ? (
                          <>{number}</>
                        ) : phase > number ? (
                          <span className="circle-icon">
                            <CheckCircleFlow />
                          </span>
                        ) : (
                          <span className="circle-icon">
                            <RadioCircleFlow />
                          </span>
                        )}
                      </span>
                    </button>
                  </PopoverTrigger>

                  {/* Pantalla popover que muestra la información de la fase*/}
                  <div>
                    <PopoverSurface className="information-phase" tabIndex={-1}>
                      <div>
                        <span
                          style={{
                            width: "100%",
                            height: "20%",
                            display: "flex",
                          }}
                        >
                          <h3>Paso{name}</h3>
                        </span>
                        <div
                          style={{
                            width: "100%",
                            height: "80%",
                            display: "flex",
                          }}
                        >
                          {/* <FormValidation onNewPhase={onNewPhase} />*/}
                        </div>
                      </div>
                    </PopoverSurface>
                  </div>
                </Popover>

                {/* Logica para la implementación de la barra de progreso*/}
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
    </FluentProvider>
  );
};

export default Flow;
