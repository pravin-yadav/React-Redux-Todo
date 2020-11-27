import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../constants"

export function todos(state = [], action) {
    const { type,payload } = action
    switch (type) {
      case CREATE_TODO:
        return [...state, payload]
      case EDIT_TODO:
          return state.map(todo => todo.id === payload.id ? {...todo, task: payload.data.task } : todo)
    case DELETE_TODO:
        return state.filter(todo => todo.id !== payload.id)
      default:
        return state
    }
  }

  