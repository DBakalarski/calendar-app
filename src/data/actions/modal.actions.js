import { modalVisibleType } from "../../enums/modalEnum"

export const openModal = () => {
    return {
        type: modalVisibleType.OPEN_MODAL,
    }
}

export const closeModal = () => {
    return {
        type: modalVisibleType.CLOSE_MODAL,
    }
}
