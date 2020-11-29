import React from 'react';

const TodoInput = (props) => {
  const { handleCreateNewTodo,handleInputChange } = props || {}
        return(
            <React.Fragment>
               <div className="card card-body my-3">
                   <form onSubmit={handleCreateNewTodo}>
                       <div className="input-group">
                           <div className="input-group-prepend">
                               <div className="input-group-text bg-info text-white">
                               <i className="fa fa-tasks" aria-hidden="true"></i>
                               </div>
                           </div>
                           <input
                           type="text"
                           className="form-control"
                           placeholder="Create a task.. ."
                           onChange={handleInputChange}
                           />
                       </div>
                       <button type="submit" className="btn btn-block btn-info mt-3">Create Task</button>
                   </form>
               </div>
            </React.Fragment>
        )
}
export default TodoInput;