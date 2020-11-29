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
  };

  // const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="container">
        <div className="text-center">
          <img src="/assets/images/todo.jpg" width="auto" height="300" alt="header_img"/>
        </div>
        <TodoInput handleInputChange={handleInputChange} handleCreateNewTodo={handleCreateNewTodo} />
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;
