import * as React from "react";
import {
  CheckmarkCircleFilled,
  RadioButtonFilled,
} from "@fluentui/react-icons";
import { makeStyles } from "@fluentui/react-components";

interface CircleButtonIconProps {
  phase: number;
  number: number;
}

const useStyles = makeStyles({
  circleContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
  },
});
const iconStyle = {
  fontSize: "36px", 
};
export const CircleButtonIcon: React.FC<CircleButtonIconProps> = ({
  phase,
  number,
}) => {
  const styles = useStyles();

  return (
    <span className={styles.circleContent}>
      {phase < number ? (
        <>{number}</>
      ) : phase > number ? (
        <CheckmarkCircleFilled style={iconStyle} primaryFill="#115ea3" />
      ) : (
        <RadioButtonFilled style={iconStyle} primaryFill="red" />
      )}
    </span>
  );
};
