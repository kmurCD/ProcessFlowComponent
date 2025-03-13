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
  FocusTrapZone,
  Callout,
} from "@fluentui/react";
import { useBoolean, useId } from "@fluentui/react-hooks";
import CheckCircleFlow from "../circleButton/assets/check_circle_flow.svg";
import RadioCircleFlow from "../circleButton/assets/radio_button.svg";
import Back from "../circleButton/assets/back.svg";
import {
  DefaultButton,
  IconButton,
  PrimaryButton,
} from "@fluentui/react/lib/Button";
import "../circleButton/circleButton.css";
import FormValidation from "../formValidation/formValidation";
import { useState } from "react";
import { DialogConfirmation } from "../dialogConfirmation/dialogConfirmation";
import { Value } from "sass";

interface PropsCircleButton {
  phase: number;
  selectPhase: number;
  number: number;
  name: string;
  onNewPhase: (value: boolean) => void;
  onSelect: (value: number) => void;
}

export const CircleButton: React.FC<PropsCircleButton> = ({
  phase,
  selectPhase,
  number,
  onSelect,
  onNewPhase,
  name,
}) => {
  const [isCalloutVisible, { toggle: toggleIsCalloutVisible }] =
    useBoolean(false);
  const buttonId = useId("callout-button");
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);

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
          <Callout
            role="alertdialog"
            className="callout"
            gapSpace={0}
            target={`#${buttonId}`}
            onDismiss={toggleIsCalloutVisible}
            setInitialFocus
            hideOverflow={true}
            directionalHint={DirectionalHint.leftBottomEdge}
            preventDismissOnScroll={true}
          >
            <div className="icon-container">
              <div className="title-name">
                <h4>{name}</h4>
              </div>
              <div className="icon-close">
                <IconButton
                  iconProps={{ iconName: "Cancel" }}
                  ariaLabel="Cerrar"
                  onClick={toggleIsCalloutVisible}
                  className="iconButton"
                />
              </div>
            </div>
            <FormValidation
              onNewPhase={function (value: boolean): void {
                throw new Error("Function not implemented.");
              }}
            ></FormValidation>

            <DialogConfirmation
              isVisible={isDialogVisible}
              onClose={closeDialog}
              onConfirm={onNewPhase}
              onCloseCallet={toggleIsCalloutVisible}
            />
            <FocusZone
              handleTabKey={FocusZoneTabbableElements.all}
              isCircularNavigation
            >
              <div className="container">
                <div className="space"></div>
                <div className="button-container">
                  {isCalloutVisible && phase == selectPhase && (
                    <PrimaryButton
                      className={"form-button-next"}
                      onClick={openDialog}
                    >
                      Siguiente
                    </PrimaryButton>
                  )}
                  {isCalloutVisible && phase == selectPhase && (
                    <DefaultButton
                      className={"form-button-cancel"}
                      onClick={() => {
                        onNewPhase(false);
                        toggleIsCalloutVisible();
                      }}
                    >
                      <Back /> Fase
                    </DefaultButton>
                  )}
                </div>
              </div>
            </FocusZone>
          </Callout>
        ) : null}
      </>
    </ThemeProvider>
  );
};
