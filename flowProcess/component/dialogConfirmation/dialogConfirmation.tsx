import * as React from "react";
import { Dialog, DialogFooter } from "@fluentui/react/lib/Dialog";
import { PrimaryButton, DefaultButton } from "@fluentui/react/lib/Button";

interface MyDialogProps {
  isVisible: boolean;
  onClose: () => void;
  onConfirm: (value: boolean) => void;
  onCloseCallet: (value: boolean) => void;
}
export const DialogConfirmation: React.FC<MyDialogProps> = ({
  isVisible,
  onClose,
  onConfirm,
  onCloseCallet
}) => {
  return (
    <>
      <Dialog
        hidden={!isVisible}
        onDismiss={onClose}
        dialogContentProps={{
          title: "Confirmación",
          subText: "¿Estás seguro de continuar?",
        }}
      >
        <DialogFooter>
          <PrimaryButton
            onClick={() => {
              onClose();
              onConfirm(true);
              onCloseCallet(false)
            }}
            text="Continuar"
          />
          <DefaultButton
            onClick={() => {
              onClose();
            }}
            text="Cancelar"
          />
        </DialogFooter>
      </Dialog>
    </>
  );
};
