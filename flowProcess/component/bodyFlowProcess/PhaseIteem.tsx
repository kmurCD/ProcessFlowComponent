import * as React from "react";
import { makeStyles } from "@fluentui/react-components";
import { CircleButton } from "../circleButton/CircleButton";
import { PhaseText } from "./PhaseText";
import { ProgressLine } from "./ProgressLinea";

interface PhaseItemProps {
    name: string;
    number: number;
    phase: number;
    isLast: boolean;
    onSelect: (number: number) => void;
    onNewPhase: (value: boolean) => void;
}

const useStyles = makeStyles({
    flowContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
    },
   
    textContainer: {
        minWidth: "80%",
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
 
    },
    circleProgressContainer: {
        minWidth: "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    spanSpace: {
        height: "50%",
    },
});

export const PhaseItem: React.FC<PhaseItemProps> = ({
    name,
    number,
    phase,
    isLast,
    onSelect,
    onNewPhase,
}) => {
    const styles = useStyles();

    return (
        <div className={styles.flowContainer}>
            <div className={styles.textContainer}>
                {/* Texto de la fase */}
                <PhaseText name={name} isLast={isLast} />
                {!isLast &&< span className={styles.spanSpace} ></span>}
            </div>
            {/* Círculo y línea de progreso */}
            <div className={styles.circleProgressContainer}>
                <CircleButton
                    number={number}
                    onSelect={() => onSelect(number)}
                    onNewPhase={onNewPhase}
                />
                {!isLast && <ProgressLine isCompleted={phase > number} />}
            </div>
        </div>
    );
};
