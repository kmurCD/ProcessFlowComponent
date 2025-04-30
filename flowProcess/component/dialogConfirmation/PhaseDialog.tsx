import * as React from "react";
import {
  Dialog,
  DialogSurface,
  DialogBody,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from "@fluentui/react-components";

interface PhaseDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const PhaseDialog: React.FC<PhaseDialogProps> = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={(e, data) => !data.open && onClose()}>
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Confirmación</DialogTitle>
          <DialogContent>
            ¿Estás seguro de continuar?
          </DialogContent>
          <DialogActions>
            <Button
              appearance="primary"
              onClick={onConfirm}
            >
              Continuar
            </Button>
            <Button 
              appearance="secondary"
              onClick={onClose}
            >
              Cancelar
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};