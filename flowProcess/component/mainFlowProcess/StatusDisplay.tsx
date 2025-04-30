import { makeStyles } from "@fluentui/react-components";
import * as React from "react";

interface Props {
    phase: number;
    names: string[];
}
const styles = makeStyles({

    phase: {
        fontWeight: "bold",
        color: "black",
        fontSize: "15px",
    },
    textPhase: {
        fontSize: "15px",
        color: "red",
    },
    status: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
})
// Componente funcional para mostrar el estado actual del flujo
const StatusDisplay: React.FC<Props> = ({ phase, names }) => {

    const style = styles();

    return (
        <div className={style.status}>
            {/* Texto que indica la fase actual */}
            <span className={style.phase}>
                Fase actual:
            </span>
            <span className={style.textPhase}>
                {names[phase - 1]}
            </span>
        </div>
    );
};

export default React.memo(StatusDisplay);