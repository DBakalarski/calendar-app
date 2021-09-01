import { modalVisibleType } from "../../enums/modalEnum"

interface IModalReducerActions {
    type: modalVisibleType,
}

const initialState = {
    modalVisible: false,
}

export const modalReducer = (state = initialState, action: IModalReducerActions) => {
    switch (action.type) {
        case modalVisibleType.OPEN_MODAL:
            return {
                ...state,
                modalVisible: true
            }
        case modalVisibleType.CLOSE_MODAL:
            return {
                ...state,
                modalVisible: false
            }
        default:
            return state
    }
}

export default modalReducer;