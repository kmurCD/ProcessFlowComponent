import * as React from "react";
import {
  FocusZone,
  FocusZoneTabbableElements,
  DirectionalHint,
  ThemeProvider,
  FluentTheme,
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
import { useState } from "react";

import { ContextGeneral } from "../../context/ContextGeneral";
import FormValidation from "../formValidation/formValidation";
import { DialogConfirmation } from "../dialogConfirmation/dialogConfirmation";






interface PropsCircleButton {
  number: number;
  onNewPhase: (value: boolean) => void;
  onSelect: (value: number) => void;
}
export const CircleButton: React.FC<PropsCircleButton> = ({
  number,
  onSelect,
  onNewPhase,
}) => {
  const { contextSelectPhase, phase, names, role, validation } =
    React.useContext(ContextGeneral);
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
          ${contextSelectPhase === number ? "circle-select" : ""}
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
            className="callout-container"
            gapSpace={0}
            target={`#${buttonId}`}
            onDismiss={toggleIsCalloutVisible}
            setInitialFocus
            hideOverflow={true}
            directionalHint={DirectionalHint.bottomRightEdge}
            preventDismissOnScroll={true}
          >
            <div className="icon-container">
              <div className="title-name">
                <h4>{names[contextSelectPhase - 1]}</h4>
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
            <div className="form-val-container">
              <FormValidation />
            </div>

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
              <div className="container-button">
                <div className="space"></div>
                <div className="button-next-back">
                  {isCalloutVisible && phase == contextSelectPhase && (
                    <PrimaryButton
                      className={`${
                        !validation
                          ? "form-button-next-disabled"
                          : "form-button-next"
                      }`}
                      onClick={openDialog}
                      disabled={!validation}
                    >
                      Siguiente
                    </PrimaryButton>
                  )}
                  {isCalloutVisible &&
                    phase == contextSelectPhase &&
                    role == true && (
                      <DefaultButton
                        className={"form-button-cancel"}
                        onClick={() => {
                          onNewPhase(false);
                          toggleIsCalloutVisible();
                        }}
                      >
                        <>
                          <Back /> Fase
                        </>
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
