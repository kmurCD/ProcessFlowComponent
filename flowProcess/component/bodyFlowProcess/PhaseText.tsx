import * as React from "react";
import { makeStyles, tokens, Text } from "@fluentui/react-components";

interface PhaseTextProps {
    name: string;
    isLast: boolean;
}

const useStyles = makeStyles({
    textContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "end",
        width: "100%",
        height: "50%",
    },
    textContent: {
        display: "flex",
        width: "100%",
    
    },
    phaseText: {
        fontSize: "14px",
        textAlign: "end",
        width: "100%",
    },
    spanSpace: {
        height: "50%",
    },
});

export const PhaseText: React.FC<PhaseTextProps> = ({ name, isLast }) => {
    const styles = useStyles();

    return (
        <div className={styles.textContainer}>
            <div
                className={styles.textContent}
                style={{ height: isLast ? "100%" : "50%" }}
            >
                <Text className={styles.phaseText}>{name}</Text>
            </div>
            
        </div>
    );
};