import { calendarView } from "../../enums/viewEnum"

const initialState = {
    view: calendarView.Month,
}

interface IViewReducerActions {
    type: calendarView
}

export const viewReducer = (state = initialState, action: IViewReducerActions) => {
    switch (action.type) {
        case 'MONTH':
            return { view: calendarView.Month }
        case 'DAY':
            return { view: calendarView.Day }
        default:
            return state
    }
}

export default viewReducer;