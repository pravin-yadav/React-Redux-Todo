import { CREATE_TODO, EDIT_TODO, DELETE_TODO, ACTIVE_TODO} from '../constants'

export function createTodo(data) {
    return {
      type: CREATE_TODO,
      payload: data
    }
  }
  
  export function editTodo(data) {
    return {
      type: EDIT_TODO,
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
  