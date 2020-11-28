import React  from 'react';

class TodoItem extends React.Component{
    render(){
        return(
            <React.Fragment>
               <li className="list-group-item d-flex justify-content-between my-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1"></label>
                        <span className="text-muted ml-3 task-text">Performing a product search.</span>
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
               <li className="list-group-item d-flex justify-content-between my-2">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1"></label>
                        <span className="text-muted ml-3 task-text">Dinner with a client</span>
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
            </React.Fragment>
        )
    }
}

export default TodoItem;