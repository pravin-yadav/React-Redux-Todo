import React, { useState } from 'react';
import { useSelector } from 'react-redux'; 
import { useDispatch } from 'react-redux'; 
import { v1 as uuid } from 'uuid'; 
import {createTodo} from './actions'; 
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);
  const [newTodoInput, setNewTodoInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const dispatch  = useDispatch();

  const handleInputChange = (e) => {
    setNewTodoInput(e.target.value);
  };

  const handleCreateNewTodo = (e) => {
    e.preventDefault();
    if(newTodoInput){
      dispatch(createTodo({
        id: uuid(),
        task: newTodoInput,
        isComplete: false
      }))
    }
    setNewTodoInput(e.target.reset())
    setIsEdit(false)
  };

  const handleEdit = (isEdit, todo) => {
    setIsEdit(isEdit)
    setNewTodoInput(todo.task)
  } 
  return (
    <div className="container">
        <div className="text-center">
          <img src="/assets/images/todo.jpg" width="auto" height="300" alt="header_img"/>
        </div>
        <TodoInput handleInputChange={(e) => handleInputChange(e)} handleCreateNewTodo={handleCreateNewTodo} isEdit={isEdit} newTodoInput={newTodoInput} />
        <TodoList todos={todos} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
