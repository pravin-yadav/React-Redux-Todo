import React from 'react';
// import React, {useEffect, useRef, useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { v1 as uuid } from 'uuid';
// import {createTodo} from '../actions';

const Todo = (props) => {
    // const [newTodoInput, setNewTodoInput] = useState("");
    // const [editTodoInput, setEditTodoInput] = useState("");
    // const [isEditMode, setIsEditMode] = useState(false);
    // const editInput = useRef(null);
    // const activeTaskId = todos[3].id;
    // const dispatch  = useDispatch();
    // const todos = useSelector(state => state.todos)
  
    // const selectedTodo =
    //   (activeTaskId && todos.find(todo => todo.id === activeTaskId)) || null;
  
    // const handleNewInputChange = (e) => {
    //   setNewTodoInput(e.target.value);
    // };
  
    // const handleEditInputChange = (e) => {
    //   setEditTodoInput(e.target.value);
    // };
  
    // const handleCreateNewTodo = (e) => {
    //   e.preventDefault();
    //   if(newTodoInput){
    //     dispatch(createTodo({
    //       id: uuid(),
    //       task: newTodoInput,
    //       isComplete: false
    //     }))
    //   }
    //   setNewTodoInput("")
    // };
  
    // const handleSelectTodo = (todoId) => () => {};
  
    // const handleEdit = () => {
    //   if (!selectedTodo) return;
  
    //   setEditTodoInput(selectedTodo.task);
    //   setIsEditMode(true);
    // };
  
    // useEffect(() => {
    //   if (isEditMode) {
    //     editInput?.current?.focus();
    //   }
    // }, [isEditMode]);
  
    // const handleUpdate = (e) => {
    //   e.preventDefault();
    // };
  
    // const handleCancelUpdate = (e) => {
    //   e.preventDefault();
    //   setIsEditMode(false);
    //   setEditTodoInput("");
    // };
  
    // const handleDelete = () => {
    //   if (!activeTaskId) return;
    // };
  
    return (
      <div className="App">
        <div id="myDIV" class="header">
          <h2>My To Do List</h2>
          <input type="text" id="myInput" placeholder="What's ..." />
          <button>Create Task</button>
        </div>

        <ul id="myUL">
          <li>Hit the gym</li>
          <li class="checked">Pay bills</li>
          <li>Meet George</li>
          <li>Buy eggs</li>
          <li>Read a book</li>
          <li>Organize office</li>
        </ul>
      </div>
    );
};

export default Todo;