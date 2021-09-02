import { modalVisibleType } from "../../enums/enums";

export const openModal = () => {
  return {
    type: modalVisibleType.OPEN_MODAL,
  };
};

export const closeModal = () => {
  return {
    type: modalVisibleType.CLOSE_MODAL,
  };
};
