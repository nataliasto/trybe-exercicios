import React, {useState} from "react";
import FormContext from "./FormContext";

function FormProvider({children}) {
  const [infosList, setInfosList] = useState([]);

  const addInfo = (info) => {
    setInfosList((prevState) => ([...prevState, info]));
  }

  const contextValue = {
    infosList,
    addInfo,
  }

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
}

export default FormProvider;
