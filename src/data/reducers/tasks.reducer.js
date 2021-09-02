import { actionTaskType } from "../../enums/enums"

interface ITaskReducerActions {
    type: actionTaskType,
    payload: {
        value: string,
        date: string,
        key: string
    }
}

const initialState = {
    tasks: [],
}

export const tasksReducer = (state = initialState, action: ITaskReducerActions) => {
    switch (action.type) {
        case actionTaskType.ADD_TASK:
            return {
                tasks: [...state.tasks, {
                    value: action.payload.value,
                    date: action.payload.date,
                    key: action.payload.key
                }]
            }
        default:
            return state
    }
}

export default tasksReducer;