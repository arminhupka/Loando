import { ALERT_ADD, ALERT_REMOVE, ALERT_RESET } from './types';

export const removeAlert = (id) => (dispatch) => {
  dispatch({
    type: ALERT_REMOVE,
    payload: id,
  });
};

export const addAlert = (message, type) => (dispatch) => {
  const id = Math.ceil(Math.random() * 1000000);

  dispatch({
    type: ALERT_ADD,
    payload: {
      id,
      message,
      type,
    },
  });

  setTimeout(() => {
    dispatch(removeAlert(id));
  }, 5000);
};

export const resetAlerts = () => (dispatch) => {
  dispatch({
    type: ALERT_RESET,
  });
};
