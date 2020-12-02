import React from 'react';
import { STATUS } from '../../constants';

const TodoItem = (props) => {
    const { todos, handleEditTask, handleStatus, handleDeleteTask } = props || {}

    const handleChecked = (e,todo) => {
        if(e.target.checked){
            handleStatus(STATUS.PROGRESS, todo)
        }else{
            handleStatus("TODO", todo)
        }
    }

    const handleTextStriked = (todo) => {
        let element = document.getElementById(todo.id);
        element.style.textDecoration = 'line-through'
        handleStatus(STATUS.COMPLETED, todo)
    }
    const todo = todos.map((todo, i) => 
                <div key={todo + '_' + i} className="card mt-2 mb-2 pointer">
                    <div className="card-body d-flex justify-content-between">
                    <div className="form-check">
                        <input onClick={(e) => handleChecked(e,todo)} className="form-check-input" type="checkbox" value="" id={todo + '_' + i} />
                        <label className="form-check-label" htmlFor={todo + '_' + i}></label>
                        <span id={todo.id} onDoubleClick={() => handleTextStriked(todo)} className="ml-3 task-text text-dark">{todo.task}</span>
                    </div> 
                   <div className="todo-icon">
                       <span onClick={() => handleEditTask(true, todo)} className="mx-4 text-secondary pointer" style={{fontSize: 24, cursor: 'pointer'}}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                       </span>
                       <span onClick={() => handleDeleteTask(todo)} className="mx-2 text-danger pointer" style={{fontSize: 24, cursor: 'pointer'}}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                       </span>
                   </div>
                    </div>
                </div>
    )
        return(
            <React.Fragment>
               {todo}
            </React.Fragment>
        )
}

export default TodoItem;