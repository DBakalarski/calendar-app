import { actionTaskType } from "../../enums/enums"

export const addTask = (value: string, date: string, key: string) => {
    return {
        type: actionTaskType.ADD_TASK,
        payload: {
            value,
            date,
            key
        }
    }
}






