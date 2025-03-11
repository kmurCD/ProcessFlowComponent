import * as React from "react";
import {
  mergeStyleSets,
  FocusTrapCallout,
  FocusZone,
  FocusZoneTabbableElements,
  FontWeights,
  Stack,
  Text,
  DirectionalHint,
  ThemeProvider,
  FluentTheme,
} from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import CheckCircleFlow from "../circleButton/assets/check_circle_flow.svg";
import RadioCircleFlow from "../circleButton/assets/radio_button.svg";
import { DefaultButton, PrimaryButton } from "@fluentui/react/lib/Button";
import "../circleButton/circleButton.css";
import FormValidation from "../formValidation/formValidation";

interface PropsCircleButton {
  phase: number;
  selectPhase: number;
  number: number;
  onSelect: (value: number) => void;
}

export const CircleButton: React.FC<PropsCircleButton> = ({
  phase,
  selectPhase,
  number,
  onSelect,
}) => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const buttonId = useId("callout-button");

  return (
    <ThemeProvider theme={FluentTheme}>
      <>
        <DefaultButton
          className={`circle-container 
          ${selectPhase === number ? "circle-select" : ""}
          ${phase === number ? "circle-container circle-active" : "inactive"}
          ${phase < number ? "circle-container-1" : ""}
          ${phase > number ? "circle-container-2" : ""}
        `}
          id={buttonId}
          onClick={() => {
            toggleIsCalloutVisible();
            onSelect(number);
          }}
        >
          {/*Iconos contenido del boton*/}
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
        </DefaultButton>

        {/*Mostrar panel*/}
        {isCalloutVisible ? (
          <FocusTrapCallout
            role="alertdialog"
            className="callout"
            gapSpace={0}
            target={`#${buttonId}`}
            onDismiss={toggleIsCalloutVisible}
            setInitialFocus
            directionalHint={DirectionalHint.leftBottomEdge}
          >
            <FormValidation
              onNewPhase={function (value: boolean): void {
                throw new Error("Function not implemented.");
              }}
            ></FormValidation>

            <FocusZone
              handleTabKey={FocusZoneTabbableElements.all}
              isCircularNavigation
            >
              <div className="container">
                <div className="space"></div>
                <div className="button-container">
                  <DefaultButton onClick={toggleIsCalloutVisible}>
                    Cancelar
                  </DefaultButton>
                  <PrimaryButton
                    className={"button"}
                    onClick={toggleIsCalloutVisible}
                  >
                    Siguiente
                  </PrimaryButton>
                </div>
              </div>
            </FocusZone>
          </FocusTrapCallout>
        ) : null}
      </>
    </ThemeProvider>
  );
};
