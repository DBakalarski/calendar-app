import { actionTaskType } from "../../enums/actionEnum"

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
            console.log(state)
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