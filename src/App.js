import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { v1 as uuid } from 'uuid';
import { createTodo, resetTodo, updateTodo, taskStatus, deleteTodo } from './actions/todo';
import { clearAlertTimeout, createAlert, deleteAlert, updateAlert, resetAlert } from './actions/alert';
import { ALERT_COLOR, ALERT_TEXT } from './constants';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);
  const alert = useSelector(state => state.alerts)
  const [changeTaskInput, setChangeTaskInput] = useState("");
  const [updateTodoTask, setUpdateTodoTask] = useState({})
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      dispatch(clearAlertTimeout({ text: '', color: '' }))
    }, 5000);

    return () => {
      clearTimeout(alertTimeout)
    }
  }, [alert, dispatch])

  const handleInputChange = (e) => {
    setChangeTaskInput(e.target.value);
  };

  const handleCreateOrUpdateTask = (e) => {
    e.preventDefault();
    if (changeTaskInput && !isEdit) {
      dispatch(createTodo({
        id: uuid(),
        task: changeTaskInput,
        status: ''
      }))
      dispatch(createAlert({ text: ALERT_TEXT.CREATE, color: ALERT_COLOR.CREATE }))
    } else if (changeTaskInput && isEdit) {
      dispatch(updateTodo({
        ...updateTodoTask,
        task: changeTaskInput
      }))
      dispatch(updateAlert({ text: ALERT_TEXT.UPDATE, color: ALERT_COLOR.UPDATE }))
    }
    setChangeTaskInput(e.target.reset())
    setIsEdit(false)
  };

  const handleEditTask = (isEdit, todo) => {
    setIsEdit(isEdit)
    setChangeTaskInput(todo.task)
    setUpdateTodoTask(todo)
  }

  const handleDeleteTask = (todo) => {
    dispatch(deleteTodo(todo))
    dispatch(deleteAlert({ text: ALERT_TEXT.DELETE, color: ALERT_COLOR.DELETE }))
  }

  const resetList = () => {
    dispatch(resetTodo([]))
    dispatch(resetAlert({ text: ALERT_TEXT.RESET, color: ALERT_COLOR.RESET }))
  }

  const handleStatus = (status, todo) => {
    dispatch(taskStatus({
      status: status,
      todo: todo
    }))
  }

  return (
    <div className="container">
      {alert && <div class={`alert alert-${alert.color} text-center`} role="alert">
        {alert.text}
      </div>}
      <div className="text-center">
        <img src="/assets/images/todo.jpg" width="auto" height="300" alt="header_img" />
      </div>
      <TodoInput
        handleInputChange={handleInputChange}
        handleCreateOrUpdateTask={handleCreateOrUpdateTask}
        isEdit={isEdit}
        changeTaskInput={changeTaskInput}
      />
      <TodoList
        todos={todos}
        handleEditTask={handleEditTask}
        resetList={resetList}
        handleStatus={handleStatus}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
