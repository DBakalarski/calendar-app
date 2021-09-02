import { actionTaskType } from "../../enums/enums";

export const addTask = (value: string, date: string, key: string) => {
  return {
    type: actionTaskType.ADD_TASK,
    payload: {
      value,
      date,
      key,
    },
  };
};

export const removeTask = (key: string) => {
  console.log("action", key);
  return {
    type: actionTaskType.REMOVE_TASK,
    payload: key,
  };
};
