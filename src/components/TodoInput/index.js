import React from 'react';

const TodoInput = (props) => {
  const { handleCreateOrUpdateTask, handleInputChange, changeTaskInput, isEdit } = props || {}
  let submitBtn = isEdit ? <button type="submit" className="btn btn-block btn-success mt-3 text-uppercase">Update Task</button>  : <button type="submit" className="btn btn-block btn-info mt-3 text-uppercase">Create Task</button>
        return(
            <React.Fragment>
               <div className="card card-body my-3">
                   <form onSubmit={handleCreateOrUpdateTask}>
                       <div className="input-group">
                           <div className="input-group-prepend">
                               <div className={`input-group-text ${isEdit ?  'bg-success' : 'bg-info'} text-white`}>
                               <i className="fa fa-tasks" aria-hidden="true"></i>
                               </div>
                           </div>
                           <input
                           type="text"
                           className="form-control"
                           placeholder="Create a task.. ."
                           value={changeTaskInput ? changeTaskInput : ''}
                           onChange={handleInputChange}
                           />
                       </div>
                       {submitBtn}
                   </form>
               </div>
            </React.Fragment>
        )
}
export default TodoInput;