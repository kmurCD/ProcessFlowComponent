import * as React from "react";
import { useState } from "react";
import "../mainFlowProcess/MainFlowProcess.css";

import { data, namePhases } from "../../data/DataOportunity";
import BodyFlowProcess from "../bodyFlowProcess/BodyFlowProcess";
import { DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

interface Props {
  phase: number;
  onPhaseSelect: (number: number) => DataItem[];
  onNewPhase: (value: boolean) => void;
}
const MainFlowProcess: React.FC<Props> = ({
  phase,
  onNewPhase,
  onPhaseSelect,
}) => {
  const [onSelectPhase, setSelectPhase] = useState<number>(0);
  const [data, setData] = useState<DataItem[]>([]);
  /**====Nombres de eportunidad */
  const names = namePhases;

  const onSelect = (number: number) => {
    setSelectPhase(number);
    setData(onPhaseSelect(number));
    console.log("Data item: ", data);
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
        <ContextGeneral.Provider value={{ data:data , contextSelectPhase: onSelectPhase, phase,names:names }}>
        <BodyFlowProcess
          onNewPhase={onNewPhase}
          onSelect={onSelect}
        /></ContextGeneral.Provider>
      </div>
    </div>
    </div>
    
  );
};

export default React.memo(MainFlowProcess);
