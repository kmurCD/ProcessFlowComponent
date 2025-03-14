import * as React from "react";
import ErrorCircleFlow from "../formValidation/assets/error_flow.svg";
import ChekOk from "../formValidation/assets/chekOk.svg";
import "../formValidation/FormValidation.css";
import { DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

const FormValidation: React.FunctionComponent = () => {
  const { data } = React.useContext(ContextGeneral);

  return (
    <div className="form-phase-container">
      <div className="form-phase">
        {data.map((item: DataItem, i: number) => {
          return (
            <div key={i} className="form-phase-item">
              <div className="label-form-validation">{item.descripcion}</div>

              {/**!isLast && <span className="span-space"> </span>*/}
              <div className="circle-error">
                {["", false, null].includes(
                  typeof item.contenido === "object" &&
                    item.contenido instanceof Date
                    ? item.contenido.toString()
                    : typeof item.contenido === "number"
                    ? item.contenido.toString()
                    : item.contenido
                ) ? (
                  <span className="circle-icon">
                    <ErrorCircleFlow />
                  </span>
                ) : (
                  <span className="circle-icon">
                    <ChekOk />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FormValidation;
