import { CREATE_TASK_ALERT, DELETE_TASK_ALERT, RESET_TASK_ALERT, UPDATE_TASK_ALERT } from "../constants"

const alert = {
    text: '',
    color: ''
}
export function alerts(state = alert, action){
    const { type, payload} = action || {}
    switch(type){
        case CREATE_TASK_ALERT: 
            return {...state, payload }
        case UPDATE_TASK_ALERT:
            return { ...state, payload }
        case DELETE_TASK_ALERT:
            return {...state, payload }
        case RESET_TASK_ALERT:
            return { ...state, payload }
        default:
            return state
    }
}