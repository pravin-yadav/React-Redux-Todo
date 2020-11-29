import React  from 'react';

const TodoItem = (props) => {
    const { todos } = props || {}
    const todo = todos.map((todo, i) => 
                <li key={todo.id + '_' + i} className="list-group-item d-flex justify-content-between my-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1"></label>
                        <span className="text-muted ml-3 task-text">{todo.task}</span>
                    </div> 
                   <div className="todo-icon">
                       <span className="mx-4 text-secondary pointer" style={{fontSize: 28, cursor: 'pointer'}}>
                            <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                       </span>
                       <span className="mx-2 text-danger pointer" style={{fontSize: 28, cursor: 'pointer'}}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                       </span>
                   </div>
               </li>
    )
        return(
            <React.Fragment>
               {todo}
            </React.Fragment>
        )
}

export default TodoItem;