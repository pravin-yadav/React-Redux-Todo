import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, RESET_TODO, TASK_STATUS } from "../constants"
import { v1 as uuid } from 'uuid';

const todo = [
  {id: uuid(), task: "PERFORMING A PRODUCT SEARCH.",status: ''} ,
  {id: uuid(), task: "Dinner With A client",status: ''},
]

export function todos(state = todo, action) {
    const { type,payload } = action || {}
    switch (type) {
      case CREATE_TODO:
        return [payload, ...state]
      case UPDATE_TODO:
          return state.map(todo => todo.id === payload.id ? { ...todo, task: payload.task, } : todo)
    case DELETE_TODO:
        return state.filter(todo => todo.id !== payload.id)
    case RESET_TODO:
      return payload || []
    case TASK_STATUS:
        return state.map(todo => todo.id === payload.todo.id ? { ...todo, status: payload.status } : todo)
      default:
        return state
    }
  }

  