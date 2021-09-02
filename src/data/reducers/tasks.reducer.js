import { actionTaskType } from "../../enums/enums";

interface ITaskReducerActions {
  type: actionTaskType;
  payload: {
    value: string,
    date: string,
    key: string,
  };
}

const initialState = {
  tasks: [],
};

export const tasksReducer = (
  state = initialState,
  action: ITaskReducerActions
) => {
  switch (action.type) {
    case actionTaskType.ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            value: action.payload.value,
            date: action.payload.date,
            key: action.payload.key,
          },
        ],
      };
    case actionTaskType.REMOVE_TASK:
      console.log("key", action.payload);
      console.log(...state.tasks);
      return {
        ...state,
        tasks: [...state.tasks.filter((item) => item.key !== action.payload)],
      };
    default:
      return state;
  }
};

export default tasksReducer;
