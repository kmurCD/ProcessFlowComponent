import * as React from "react";
import { makeStyles, tokens } from "@fluentui/react-components";

interface ProgressLineProps {
    isCompleted: boolean;
}

const useStyles = makeStyles({
    progressLine: {
        width: "4px",
        height: "20px",
        margin: "4px 0",
    },
    completed: {
        backgroundColor: "#115ea3", // Color azul para las fases completadas
    },
    pending: {
        backgroundColor: "#616161", // Color gris para las fases pendientes
    },
});

export const ProgressLine: React.FC<ProgressLineProps> = ({ isCompleted }) => {
    const styles = useStyles();

    return (
        <div
            className={`${styles.progressLine} ${isCompleted ? styles.completed : styles.pending
                }`}
        />
    );
};