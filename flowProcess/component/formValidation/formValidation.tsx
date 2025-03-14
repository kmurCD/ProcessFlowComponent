import * as React from "react";
import ErrorCircleFlow from "../formValidation/assets/error_flow.svg";
import "../formValidation/FormValidation.css";
import { Phase, DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

const FormValidation: React.FC = ({}) => {
  const {data} = React.useContext(ContextGeneral);

  return (
    <div className="form-phase-container">
      <div className="form-phase">
        {data.map((item: DataItem, i: number) => {
          const isLast = i === data.length - 1;
          return (


            <div key={i} className="form-validation-container">

              <div className="label-form-container">
                <div className="label-form-validation">{item.descripcion}</div>
              </div>

              {/**!isLast && <span className="span-space"> </span>*/}
              <div className="circle-error">
               
               
                <span className="circle-icon">
                  <ErrorCircleFlow />
                </span>
              </div>
            </div>


          );
        })}
      </div>
    </div>
  );
};
export default FormValidation;
