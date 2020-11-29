import React  from 'react';

class TodoItemStatus extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="card mt-2 mb-2 pointer">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <i className="fa fa-dot-circle-o task-text" aria-hidden="true" style={{color: '#6c757d', fontSize: '18px'}}></i>
                            <span className="ml-3 task-text text-uppercase">Programming Tutorials</span>
                        </div> 
                        <div className="todo-icon">
                                <span className="badge badge-info text-uppercase text-white" style={{fontSize: '12px'}}>IN PROGRESS</span>
                        </div>
                    </div>
                </div>
                <div className="card mt-2 mb-2 pointer">
                    <div className="card-body d-flex justify-content-between">
                        <div>
                            <i className="fa fa-dot-circle-o task-text" aria-hidden="true" style={{color: '#6c757d', fontSize: '18px'}}></i>
                            <span className="ml-3 task-text" style={{textDecoration: 'line-through'}}>Adding to shopping cart.</span>
                        </div> 
                        <div className="todo-icon">
                            <span className="badge badge-success text-uppercase text-white" style={{fontSize: '13px'}}>COMPLETED</span>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}

export default TodoItemStatus;