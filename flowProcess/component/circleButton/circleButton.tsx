import * as React from "react";
import { useState, memo, useContext, useMemo } from "react";
import {
  Button,
  FluentProvider,
  Popover,
  PopoverTrigger,
  Tooltip,
  useId,
} from "@fluentui/react-components";

import { ContextGeneral } from "../../context/ContextGeneral";
import { CircleButtonIcon } from "./CircleButtonIcon";
import { PhasePopover } from "./PhasePopover";
import { lightTheme } from "../../theme/theme"; // Importa el tema

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
  // Obtener todo el contexto
  const context = useContext(ContextGeneral);

  // Extraer y memoizar los valores que necesitas
  const phase = useMemo(() => context.phase, [context.phase]);
  const contextSelectPhase = useMemo(
    () => context.contextSelectPhase,
    [context.contextSelectPhase]
  );
  const names = useMemo(() => context.names, [context.names]);
  const role = useMemo(() => context.role, [context.role]);
  const validationContent = useMemo(() => context.validationContent, [context.validationContent]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const buttonId = useId("circle-button");

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);

  const getButtonStyles = () => {
    const baseStyle = {
      width: "40px", // Ancho explícito de 40px
      height: "40px", // Alto explícito de 40px
      minWidth: "40px", // Ancho mínimo para evitar expansión
      maxWidth: "40px", // Ancho máximo para limitar el botón
      padding: 0, // Sin relleno interior
      margin: 0, // Sin margen exterior
      borderRadius: "50%", // Forma circular
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    };

    if (phase === number) {
      return {
        ...baseStyle,
        color: "white",
        fontWeight: "bold",
      };
    } else if (contextSelectPhase === number) {
      return {
        ...baseStyle,
        backgroundColor: "#707070", // Gris
        color: "white",
        border: "solid 5px #d1d1d1",
      };
    } else if (number > phase) {
      return {
        ...baseStyle,
        backgroundColor: "white",
        color: "#505050",
        border: "1px solid #d1d1d1",
      };
    } else {
      return {
        ...baseStyle,
        color: "white",
      };
    }
  };

  return (
    <FluentProvider theme={lightTheme}>
      <Popover
        withArrow
        size="small"
        positioning={"before-bottom"}
        open={isPopoverOpen}
        onOpenChange={(e, data) => setIsPopoverOpen(data.open)}
      >
        <PopoverTrigger>
          <Tooltip
            content={`Fase ${number}`}
            relationship="label"
            withArrow
            positioning={"after"}
          >
            {/* Tooltip para mostrar el número de fase */}
            <Button
              id={buttonId}
              style={getButtonStyles()} // Usar style en lugar de className
              onClick={() => {
                togglePopover();
                onSelect(number);
              }}
            >
              <CircleButtonIcon phase={phase} number={number} />
            </Button>
          </Tooltip>
        </PopoverTrigger>

        <PhasePopover
          isOpen={isPopoverOpen}
          onClose={() => setIsPopoverOpen(false)}
          phaseName={names[contextSelectPhase - 1]}
          currentPhase={phase}
          selectedPhase={contextSelectPhase}
          hasAdminRole={!!role}
          validationContent={validationContent}
          onNewPhase={onNewPhase}
        />
      </Popover>
    </FluentProvider>
  );
};
