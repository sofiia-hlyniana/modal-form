import { combineReducers } from 'redux'
import modalReducer from './modal'

export default combineReducers({
    isModalOpen: modalReducer
})