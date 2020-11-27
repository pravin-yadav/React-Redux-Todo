import React from 'react';


class TodoInput extends React.Component{
    render(){
        return(
            <React.Fragment>
               <div className="card card-body my-3">
                   <form>
                       <div className="input-group">
                           <div className="input-group-prepend">
                               <div className="input-group-text bg-primary text-white">
                                 <i className="fas fa-book" />
                               </div>
                           </div>
                           <input  
                           type="text"
                           className="form-control text-capitalize"
                           placeholder="create a task.. ."
                           />
                       </div>
                       <button type="submit" className="btn btn-block btn-primary mt-3">Create Task</button>
                   </form>
               </div>
            </React.Fragment>
        )
    }
}
export default TodoInput;