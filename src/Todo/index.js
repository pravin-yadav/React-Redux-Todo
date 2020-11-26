import React, {useEffect, useRef, useState} from 'react';
import { v1 as uuid } from 'uuid';


const todos = [
    {id: uuid(), desc: "Learn React", isComplete: true} ,
    {id: uuid(), desc: "Learn Redux", isComplete: true},
    {id: uuid(), desc: "Javascript", isComplete: true},
    {id: uuid(), desc: "Learn Redux-Toolkit", isComplete: false},
    {id: uuid(), desc: "Learn Next", isComplete: false},
    
]


const Todo = () => {
    const [newTodoInput, setNewTodoInput] = useState("");
    const [editTodoInput, setEditTodoInput] = useState("");
    const [isEditMode, setIsEditMode] = useState(false);
    const editInput = useRef(null);
    const activeTaskId = todos[3].id;
  
    const selectedTodo =
      (activeTaskId && todos.find(todo => todo.id === activeTaskId)) || null;
  
    const handleNewInputChange = (e) => {
      setNewTodoInput(e.target.value);
    };
  
    const handleEditInputChange = (e) => {
      setEditTodoInput(e.target.value);
    };
  
    const handleCreateNewTodo = (e) => {
      e.preventDefault();
    };
  
    const handleSelectTodo = (todoId) => () => {};
  
    const handleEdit = () => {
      if (!selectedTodo) return;
  
      setEditTodoInput(selectedTodo.desc);
      setIsEditMode(true);
    };
  
    useEffect(() => {
      if (isEditMode) {
        editInput?.current?.focus();
      }
    }, [isEditMode]);
  
    const handleUpdate = (e) => {
      e.preventDefault();
    };
  
    const handleCancelUpdate = (e) => {
      e.preventDefault();
      setIsEditMode(false);
      setEditTodoInput("");
    };
  
    const handleDelete = () => {
      if (!activeTaskId) return;
    };
  
    return (
      <div className="App">
        <div className="">
          <h1>Todo</h1>
          <form onSubmit={handleCreateNewTodo}>
            <label htmlFor="new-todo">Add new:</label>
            <input
              onChange={handleNewInputChange}
              id="new-todo"
              value={newTodoInput}
            />
            <button type="submit">Create</button>
          </form>
        </div>
        <div className="App__body">
          <ul className="App__list">
            <h2>Task Todo:</h2>
            {todos.map((todo, i) => (
              <li
                className={`${todo.isComplete ? "done" : ""} ${
                  todo.id === activeTaskId ? "active" : ""
                }`}
                key={todo.id}
                onClick={handleSelectTodo(todo.id)}
              >
                <span className="list-number">{i + 1})</span> {todo.desc}
              </li>
            ))}
          </ul>
          <div className="App_todo-info">
            <h2>Active Task:</h2>
            {selectedTodo === null ? (
              <span className="empty-state">No Active Task</span>
            ) : !isEditMode ? (
              <>
                <span
                  className={`todo-desc ${
                    selectedTodo?.isComplete ? "done" : ""
                  }`}
                >
                  {selectedTodo.desc}
                </span>
                <div className="todo-actions">
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              </>
            ) : (
              <form onSubmit={handleUpdate}>
                <label htmlFor="edit-todo">Edit:</label>
                <input
                  ref={editInput}
                  onChange={handleEditInputChange}
                  value={editTodoInput}
                />
                <button type="submit">Update</button>
                <button onClick={handleCancelUpdate}>Cancel</button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
};

export default Todo