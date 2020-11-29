import { CREATE_TODO, DELETE_TODO, EDIT_TODO } from "../constants"
import { v1 as uuid } from 'uuid';

const todo = [
  {id: uuid(), task: "Learn React", isComplete: true} ,
  {id: uuid(), task: "Learn Redux", isComplete: true},
  {id: uuid(), task: "Javascript", isComplete: true},
  {id: uuid(), task: "Learn Redux-Toolkit", isComplete: false},
  {id: uuid(), task: "Learn Next", isComplete: false},
]

export function todos(state = todo, action) {
    const { type,payload } = action || {}
    switch (type) {
      case CREATE_TODO:
        return [payload, ...state]
      case EDIT_TODO:
          return state.map(todo => todo.id === payload.id ? {...todo, task: payload.task } : todo)
    case DELETE_TODO:
        return state.filter(todo => todo.id !== payload.id)
      default:
        return state
    }
  }

  