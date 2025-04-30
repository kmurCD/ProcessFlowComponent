import * as React from "react";
import { useState, useMemo, useCallback } from "react";
import { makeStyles } from "@fluentui/react-components";

import { namePhases } from "../../data/DataOportunity";
import BodyFlowProcess from "../bodyFlowProcess/BodyFlowProcess";
import { DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

import useValidation from "./useValidation"; // Hook personalizado para validación
import StatusDisplay from "./StatusDisplay";

interface Props {
  phase: number;
  role: boolean;
  onPhaseSelect: (number: number) => {
    dataItems: DataItem[];
    isValid: boolean;
  };
  onNewPhase: (value: boolean) => void;
}

const useStyles = makeStyles({
  containerMain: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    padding: "16px",
    gap: "16px",
  },
  containerFlow: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  containerSection: {
    marginTop: "16px",
  },
});

const MainFlowProcess: React.FC<Props> = ({ phase, role, onPhaseSelect, onNewPhase }) => {
  const styles = useStyles();

  // Estados
  const [onSelectPhase, setSelectPhase] = useState<number>(0);
  const [onValidationContent, setValidation] = useState<boolean>(false);
  const [data, setData] = useState<DataItem[]>([]);

  // Hook personalizado para validación
  const validateData = useValidation();

  // Manejo de selección de fase
  const onSelect = useCallback(
    (number: number) => {
      setSelectPhase(number);
      const { dataItems, isValid } = onPhaseSelect(number);
      setData(dataItems);
      setValidation(isValid && validateData(dataItems));
    },
    [onPhaseSelect, validateData]
  );

  // Memoizar nombres de fases
  const names = useMemo(() => namePhases, []);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerFlow}>
        {/* Subcomponente para mostrar el estado */}
        <StatusDisplay phase={phase} names={names} />

        <div className={styles.containerSection}>
          {/* Proveedor de contexto */}
          <ContextGeneral.Provider
            value={{
              data,
              validationContent: onValidationContent,
              role,
              contextSelectPhase: onSelectPhase,
              phase,
              names,
            }}
          >
            {/* Componente principal del flujo */}
            <BodyFlowProcess onNewPhase={onNewPhase} onSelect={onSelect} />
          </ContextGeneral.Provider>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainFlowProcess);
