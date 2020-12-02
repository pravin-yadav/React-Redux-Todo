import { CREATE_TASK_ALERT, DELETE_TASK_ALERT, RESET_TASK_ALERT, UPDATE_TASK_ALERT } from "../constants";

export function createAlert(data){
    return {
        type: CREATE_TASK_ALERT,
        payload: data
    }
}

export function updateAlert(data){
    return{
        type: UPDATE_TASK_ALERT,
        payload: data
    }
}

export function deleteAlert(data){
    return{
        type: DELETE_TASK_ALERT,
        payload: data
    }
}

export function resetAlert(data){
    return{
        type: RESET_TASK_ALERT,
        payload: data
    }
}