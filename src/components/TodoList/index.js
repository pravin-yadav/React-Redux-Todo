import React from 'react';
import TodoItem from '../TodoItem';
import TodoItemStatus from '../TodoItemStatus';


const TodoList = (props) => {
        const { todos } = props || {}
        return(
            <React.Fragment>
               {todos.length ? 
               <ul className="list-group my-5">
                    <h6 className="mt-3" style={{fontSize: '20px'}}><span className="badge badge-light">TODO</span></h6>
                        <TodoItem todos={todos} />
                    <h6 className="mt-5" style={{fontSize: '20px'}}><span className="badge badge-light">STATUS</span></h6>
                        <TodoItemStatus todos={todos} />
                    <button type="button" className="btn btn-block btn-secondary text-capitalize mt-5">Reset List</button>
               </ul> : null}
            </React.Fragment>
        )
    }
export default TodoList;