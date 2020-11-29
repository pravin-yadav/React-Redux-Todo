import React from 'react';
import { useSelector } from 'react-redux'; 
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <div className="container">
        <div className="text-center">
          <img src="/assets/images/todo.jpg" width="auto" height="300" alt="header_img"/>
        </div>
        <TodoInput  />
        <TodoList todos={todos}/>
    </div>
  );
}

export default App;
