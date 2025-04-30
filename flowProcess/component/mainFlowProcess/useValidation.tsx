import { DataItem } from "../../data/DataType";

/**
 * Hook personalizado para validar los datos de un array de DataItem.
 * Verifica que el contenido de cada DataItem no sea null, undefined, vacío o false.
 * También valida archivos e inputs específicos.
 * @returns {function} Función que toma un array de DataItem y devuelve un booleano indicando si todos los elementos son válidos.
 */
const useValidation = () => {
    return (dataItems: DataItem[]) => {
        return dataItems.every((item) => {
            const content = item.contenido;
            
            // Validación básica para null, undefined
            if (content === null || content === undefined) {
                return false;
            }

            // Validación para archivos
            if (content instanceof File) {
                // Validar que el archivo tenga tamaño y nombre
                return content.size > 0 && content.name.trim() !== "";
            }

            // Validación para strings
            if (typeof content === "string") {
                return content.trim().length > 0;
            }

            // Validación para números
            if (typeof content === "number") {
                return !isNaN(content);
            }

            // Validación para booleanos
            if (typeof content === "boolean") {
                return content === true;
            }

            // Validación para fechas
            if (content instanceof Date) {
                return !isNaN(content.getTime());
            }

            // Para cualquier otro tipo, asumimos que es válido
            return true;
        });
    };
};

export default useValidation;