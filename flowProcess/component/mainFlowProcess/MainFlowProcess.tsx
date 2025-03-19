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
const MainFlowProcess: React.FC<Props> = ({
  phase,
  onNewPhase,
  onPhaseSelect,
  role,
}) => {
  const [onSelectPhase, setSelectPhase] = useState<number>(0);
  const [onValitation, setValitation] = useState<boolean>(false);
  const [data, setData] = useState<DataItem[]>([]);

  /**====Nombres de eportunidad */
  const names = namePhases;
  const onSelect = (number: number) => {
    setSelectPhase(number);

    const { dataItems, isValid } = onPhaseSelect(number);

    setData(dataItems);
    setValitation(isValid); // Actualiza el estado de validación
    console.log("validación: ", isValid);
  };

  return (
    <div className="container-mainFlowProcess">
      <div className="container-flowProcess">
        <div className="status">
          <span style={{ fontWeight: "bold", color: "black", fontSize: "15" }}>
            Estado actual:
          </span>
          <span style={{ color: "red", fontSize: "15", textAlign: "center" }}>
            {names[phase - 1]}
          </span>
        </div>

        <div className="container-section">
          <ContextGeneral.Provider
            value={{
              data,
              validation: onValitation,
              role: role,
              contextSelectPhase: onSelectPhase,
              phase,
              names: names,
            }}
          >
            <BodyFlowProcess onNewPhase={onNewPhase} onSelect={onSelect} />
          </ContextGeneral.Provider>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MainFlowProcess);
