import React from 'react';


class TodoInput extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div className="mt-5 pt-5" />
               <div className="card card-body my-3">
                   <form>
                       <div className="input-group">
                           <div className="input-group-prepend">
                               <div className="input-group-text bg-info text-white">
                               <i className="fa fa-tasks" aria-hidden="true"></i>
                               </div>
                           </div>
                           <input  
                           type="text"
                           className="form-control text-capitalize"
                           placeholder="create a task.. ."
                           />
                       </div>
                       <button type="submit" className="btn btn-block btn-info mt-3">Create Task</button>
                   </form>
               </div>
            </React.Fragment>
        )
    }
}
export default TodoInput;