import React  from 'react';

class TodoItemStatus extends React.Component{
    render(){
        return(
            <React.Fragment>
                <li className="list-group-item d-flex justify-content-between my-2">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" checked/>
                        <label class="form-check-label" for="defaultCheck1"></label>
                        <span className="text-muted ml-3 task-text" style={{textDecoration: 'line-through'}}>Adding to shopping cart.</span>
                    </div> 
                   <div className="todo-icon">
                       <span class="badge badge-success text-capitalize text-white" style={{fontSize: '16px'}}>Completed</span>
                   </div>
               </li>
            </React.Fragment>
        )
    }
}

export default TodoItemStatus;