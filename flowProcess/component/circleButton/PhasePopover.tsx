import * as React from "react";
import { useState } from "react";
import {
  Button,
  PopoverSurface,
  makeStyles,
} from "@fluentui/react-components";
import { Dismiss24Regular } from "@fluentui/react-icons";

import FormValidation from "../formValidation/FormValidation";
import { PhaseDialog } from "../dialogConfirmation/PhaseDialog";
import { PhaseActions } from "./PhaseActions";

interface PhasePopoverProps {
  isOpen: boolean;
  onClose: () => void;
  phaseName: string;
  currentPhase: number;
  selectedPhase: number;
  hasAdminRole: boolean;
  validationContent: boolean;
  onNewPhase: (value: boolean) => void;
}

const useStyles = makeStyles({
  popoverContainer: {
    padding: "14px",
    width: "100%",
    height: "auto",
    maxWidth: "200px",
    maxHeight: "500px",
  },
  headerContainer: {
    display: "flex",
    height: "50px",
    justifyContent: "space-between",
    alignItems: "center",
    color: "red",
  
  },
  titleText: {
    margin: "0",
    fontWeight: "600",
  },
  formContainer: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
});

export const PhasePopover: React.FC<PhasePopoverProps> = ({
  onClose,
  phaseName,
  currentPhase,
  selectedPhase,
  hasAdminRole,
  validationContent,
  onNewPhase,
}) => {
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const styles = useStyles();
  
  // Manejadores
  const openDialog = () => setIsDialogVisible(true);
  const closeDialog = () => setIsDialogVisible(false);
  
  const handleConfirm = () => {
    closeDialog();
    onNewPhase(true);
    onClose();
  };
  
  const handleBack = () => {
    onNewPhase(false);
    onClose();
  };

  const showActions = currentPhase === selectedPhase;

  return (
    <PopoverSurface className={styles.popoverContainer}>
      <div>
        <div className={styles.headerContainer}>
          <h4 className={styles.titleText}>{phaseName}</h4>
          <Button
            appearance="subtle"
            icon={<Dismiss24Regular />}
            aria-label="Cerrar"
            onClick={onClose}
          />
        </div>
        
        <div className={styles.formContainer}>
          <FormValidation />
        </div>
        
        <PhaseDialog 
          isOpen={isDialogVisible}
          onClose={closeDialog}
          onConfirm={handleConfirm}
        />

        <PhaseActions 
          showNextButton={showActions}
          showBackButton={showActions && hasAdminRole}
          validationContent={validationContent}
          onNextClick={openDialog}
          onBackClick={handleBack}
        />
      </div>
    </PopoverSurface>
  );
};