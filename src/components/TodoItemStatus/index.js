import React  from 'react';

class TodoItemStatus extends React.Component{
    render(){
        return(
            <React.Fragment>
                <li className="list-group-item d-flex justify-content-between my-2">
                    <div>
                        <i className="fa fa-dot-circle-o task-text" aria-hidden="true" style={{color: '#6c757d', fontSize: '18px'}}></i>
                        <span className="ml-3 task-text">Performing a product search.</span>
                    </div> 
                   <div className="todo-icon">
                        <span className="badge badge-info text-uppercase text-white" style={{fontSize: '12px'}}>IN PROGRESS</span>
                   </div>
               </li>
                <li className="list-group-item d-flex justify-content-between my-2">
                    <div>
                        <i className="fa fa-dot-circle-o task-text" aria-hidden="true" style={{color: '#6c757d', fontSize: '18px'}}></i>
                        <span className="ml-3 task-text" style={{textDecoration: 'line-through'}}>Adding to shopping cart.</span>
                    </div> 
                   <div className="todo-icon">
                       <span className="badge badge-success text-uppercase text-white" style={{fontSize: '13px'}}>COMPLETED</span>
                   </div>
               </li>
            </React.Fragment>
        )
    }
}

export default TodoItemStatus;