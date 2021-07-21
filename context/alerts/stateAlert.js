import { useReducer } from "react";

import { AlertContext } from "./contextAlert";
import { reducerAlert, HIDEN_ALERT, SHOW_ALERT } from "./reducerAlert";

export const AlertProvider = (props) => {
  const stateInitial = {
    alert: null,
  };

  const [state, dispatch] = useReducer(reducerAlert, stateInitial);

  const showAlert = (message, category) => {
    dispatch({
      type: SHOW_ALERT,
      payload: {
        message,
        category,
      },
    });
    setTimeout(() => {
      dispatch({
        type: HIDEN_ALERT,
      });
    }, 6000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        showAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
