import * as React from "react";
import {
  makeStyles,
  tokens,
  Text
} from "@fluentui/react-components";
import {
  ErrorCircleRegular,
  CheckmarkCircleFilled
} from "@fluentui/react-icons";
import { DataItem } from "../../data/DataType";
import { ContextGeneral } from "../../context/ContextGeneral";

// Definición de estilos usando makeStyles de Fluent UI v9
const useStyles = makeStyles({
  formPhaseContainer: {
    padding: "16px",
    fontFamily: tokens.fontFamilyBase,
  },
  formPhase: {
    display: "flex",
    flexDirection: "column",
    gap: "12px", // Espacio entre elementos
  },
  formPhaseItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  labelFormValidation: {
    flex: 1,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground1,
    paddingRight: "16px",
  },
  circleError: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  circleIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "32px",
    width: "32px",
    borderRadius: "50%",
  },

  iconStyle: {
    fontSize: "40px",
  }
});
const iconStyle = {
  fontSize: "25px",
};

const FormValidation: React.FunctionComponent = () => {
  const { data } = React.useContext(ContextGeneral);
  const styles = useStyles();
  type ContentType = string | number | boolean | Date | null | undefined;


  // Función para evaluar si el contenido está vacío o es falso
  const isEmpty = (content: ContentType): boolean => {
    if (content === undefined || content === null || content === false) {
      return true;
    }

    if (typeof content === "string" && content.trim() === "") {
      return true;
    }

    if (content instanceof Date) {
      return false; // Una fecha siempre tiene un valor
    }

    if (typeof content === "number") {
      return isNaN(content); // Solo es vacío si es NaN
    }

    return false;
  };

  return (
    <div className={styles.formPhaseContainer}>
      <div className={styles.formPhase}>
        {data.map((item: DataItem, i: number) => {
          // Verificar si el contenido está vacío
          const contentIsEmpty = isEmpty(item.contenido);

          return (
            <div key={i} className={styles.formPhaseItem}>
              <Text className={styles.labelFormValidation}>
                {item.descripcion}
              </Text>

              <div className={styles.circleError}>
                {contentIsEmpty ? (
                  <span className={styles.circleIcon}>
                    <ErrorCircleRegular style={iconStyle} primaryFill="red" />
                  </span>
                ) : (
                  <span className={styles.circleIcon}>
                    <CheckmarkCircleFilled style={iconStyle} primaryFill="#54b054" />
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