import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, ACTIVE_TODO, RESET_TODO} from '../constants'

export function createTodo(data) {
    return {
      type: CREATE_TODO,
      payload: data
    }
  }
  
  export function updateTodo(data) {
    return {
      type: UPDATE_TODO,
      payload: data
    }
  }
  
  export function deleteTodo(data) {
    return {
      type: DELETE_TODO,
      payload: data
    }
  }

  export function activeTodo(data) {
    return {
      type: ACTIVE_TODO,
      payload: data
    }
  }

  export function resetTodo(data) {
    return {
      type: RESET_TODO,
      payload: data
    }
  }
  