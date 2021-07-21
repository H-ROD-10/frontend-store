export const SHOW_ALERT = "SHOW_ALERT";
export const HIDEN_ALERT = "HIDEN_ALERT";

export const reducerAlert = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT: {
      return {
        alert: action.payload,
      };
    }
    case HIDEN_ALERT: {
      return {
        alert: null,
      };
    }
    default:
      return state;
  }
};
