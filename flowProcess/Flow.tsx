import {
  Popover,
  PopoverTrigger,
  PopoverSurface,
  makeStyles,
  FluentProvider,
  teamsLightTheme,
  Button,
} from "@fluentui/react-components";
import * as React from "react";

interface Props {
  onSelect: (stepNumber: number) => void;
  onNextPhase: (newPhase:number)=>void;
  phase: number;
  selectPhase: number;
  names: string[];
}
const useStyles = makeStyles({
  contentHeader: {
    marginTop: "0",
  },
  popoverSurface: {},
});
const Flow: React.FC<Props> = ({ onSelect, phase, selectPhase, names,onNextPhase }) => {
  
  
  return (
    <FluentProvider theme={teamsLightTheme}>
      <div className="steps">
        {names.map((name, i) => {
          const number = i+1;
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
                <Popover  withArrow positioning={{ position: "before" }}>
                  <PopoverTrigger disableButtonEnhancement>
                    <button
                      type="button"
                      className={`circle-container 
                      ${selectPhase === number ? "circle-select" : ""}
                      ${
                        phase === number
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
                          <span className="material-icons circle-icon">
                            task_alt
                          </span>
                        ) : (
                          <span className="material-icons circle-icon">
                            radio_button_checked
                          </span>
                        )}
                      </span>
                    </button>
                  </PopoverTrigger>

                  {/* Pantalla popover que muestra la información de la fase*/}
                  <div>
                    <PopoverSurface className="information-phase" tabIndex={-1}>
                      <div>
                        <h3>Paso {number}</h3>
                        <p>{name}</p>

                        <Button className="informattion-button" onClick={() => onNextPhase(number)}>
                          Fase siguiente

                        </Button>
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
