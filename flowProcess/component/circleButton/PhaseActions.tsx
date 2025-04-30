import * as React from "react";
import { Button, makeStyles } from "@fluentui/react-components";
import { Calendar } from "@fluentui/react";
import { ArrowCircleRight12Filled, ArrowCircleRight28Regular, CalendarMonthRegular } from "@fluentui/react-icons";
interface PhaseActionsProps {
  showNextButton: boolean;
  showBackButton: boolean;
  validationContent: boolean;
  onNextClick: () => void;
  onBackClick: () => void;
}

const useStyles = makeStyles({
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    gap: "8px",
    marginTop: "15px",
    paddingRight: "5px",
  },
  buttonNext: {
    backgroundColor: "#115ea3",
    color: "white",
    "&:disabled": {
      backgroundColor: "#f3f2f1",
      color: "#a19f9d",
    },
  },
  buttonBack: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  circleIcon: {
    display: "flex",
    alignItems: "center",
    width: "16px",
    height: "16px",
  },
});

export const PhaseActions: React.FC<PhaseActionsProps> = ({
  showNextButton,
  showBackButton,
  validationContent,
  onNextClick,
  onBackClick,
}) => {
  const styles = useStyles();
  
  return (
    <div className={styles.buttonContainer}>
      {showNextButton && (
        <Button
          appearance="secondary"
         // icon={<ArrowCircleRight28Regular />}
          className={styles.buttonNext}
          onClick={onNextClick}
          disabled={!validationContent}
        >
          Siguiente
        </Button>
      )}
      
      {showBackButton && (
        <Button
          appearance="secondary"
          className={styles.buttonBack}
          onClick={onBackClick}
        >
          Fase
        </Button>
      )}
    </div>
  );
};