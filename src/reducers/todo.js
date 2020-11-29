import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../constants"
import { v1 as uuid } from 'uuid';

const todo = [
  {id: uuid(), task: "PERFORMING A PRODUCT SEARCH.", isComplete: false} ,
  {id: uuid(), task: "Dinner With A client", isComplete: true},
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
      default:
        return state
    }
  }

  