import * as React from "react";
import { useState } from "react";
import "../mainFlowProcess/MainFlowProcess.css";

import { namePhases } from "../../data/DataOportunity";
import BodyFlowProcess from "../bodyFlowProcess/BodyFlowProcess";
import { DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

interface Props {
  phase: number;
  role: boolean;
  onPhaseSelect: (number: number) => {
    dataItems: DataItem[];
    isValid: boolean;
  };
  onNewPhase: (value: boolean) => void;
}
const MainFlowProcess: React.FC<Props> = (Props) => {
  const [onSelectPhase, setSelectPhase] = useState<number>(0);
  const [onValitation, setValitation] = useState<boolean>(false);
  const [data, setData] = useState<DataItem[]>([]);

  /**====Nombres de eportunidad */
  const names = namePhases;

  // Memoizar la validación de datos
  const validateData = React.useCallback((dataItems: DataItem[]) => {
    return dataItems.every((item) => {
      const content = item.contenido;
      return (
        content !== null &&
        content !== undefined &&
        content !== "" &&
        content !== false
      );
    });
  }, []);

  // Usar la validación memoizada
  const onSelect = React.useCallback(
    (number: number) => {
      setSelectPhase(number);
      const { dataItems, isValid } = Props.onPhaseSelect(number);
      setData(dataItems);
      setValitation(isValid && validateData(dataItems));
    },
    [Props.onPhaseSelect, validateData]
  );

  /* Crear un objeto de estilos memoizado*/
  const styles = React.useMemo(
    () => ({
      statusText: {
        fontWeight: "bold",
        color: "black",
        fontSize: "15",
      },
      statusValue: {
        color: "red",
        fontSize: "15",
        textAlign: "center" as const,
      },
    }),
    []
  );

  // Memoizar el componente de estado
  const StatusDisplay = React.memo(({ phase }: { phase: number }) => (
    <div className="status">
      <span style={styles.statusText}>Fase actual:</span>
      <span style={styles.statusValue}>{namePhases[phase - 1]}</span>
    </div>
  ));
  StatusDisplay.displayName = "StatusDisplay";

  return (
    <div className="container-mainFlowProcess">
      <div className="container-flowProcess">
        <StatusDisplay phase={Props.phase} />

        <div className="container-section">
          <ContextGeneral.Provider
            value={{
              data,
              validation: onValitation,
              role: Props.role,
              contextSelectPhase: onSelectPhase,
              phase: Props.phase,
              names: names,
            }}
          >
            <BodyFlowProcess
              onNewPhase={Props.onNewPhase}
              onSelect={onSelect}
            />
          </ContextGeneral.Provider>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainFlowProcess);
