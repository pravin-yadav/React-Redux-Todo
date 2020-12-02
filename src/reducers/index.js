import { combineReducers } from  "redux";
import { todos } from "./todo";
import { alerts } from "./alerts";


const reducers = combineReducers({
    todos: todos,
    alerts: alerts
})

export default reducers;