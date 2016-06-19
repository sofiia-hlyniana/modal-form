import { TOGGLE_MODAL } from '../constants'

export default (isModalOpen = false, action) => {
    const { type } = action

    switch (type) {
        case TOGGLE_MODAL: return !isModalOpen
    }
    return isModalOpen
}