import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { ContextGeneral } from "../../context/ContextGeneral";
import { PhaseItem } from "./PhaseIteem";


interface Props {
  onNewPhase: (value: boolean) => void;
  onSelect: (number: number) => void;
}

const useStyles = makeStyles({
  steps: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: "8px",
  },
});

const BodyFlowProcess: React.FC<Props> = ({ onNewPhase, onSelect }) => {
  const { names, phase } = React.useContext(ContextGeneral);
  const styles = useStyles();

  return (
    <div className={styles.steps}>
      {names.map((name, i) => {
        const number = i + 1;
        const isLast = i === names.length - 1;     
        return (
          <PhaseItem
            key={number}
            name={name}
            number={number}
            phase={phase}
            isLast={isLast}
            onSelect={onSelect}
            onNewPhase={onNewPhase}
          />
        );
      })}
    </div>
  );
};

export default BodyFlowProcess;