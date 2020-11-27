const { combineReducers } = require("redux");
const { todos } = require("./todo");

const reducers = combineReducers({
    todos: todos
})

export default reducers;