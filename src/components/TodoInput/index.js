import React, {useState} from 'react';
import { useDispatch } from 'react-redux'; 
import { v1 as uuid } from 'uuid'; 
import {createTodo} from '../../actions'; 


const TodoInput = () => {
    const [newTodoInput, setNewTodoInput] = useState("");
    const dispatch  = useDispatch();

    const handleInputChange = (e) => {
      setNewTodoInput(e.target.value);
    };
  
    const handleCreateNewTodo = (e) => {
      e.preventDefault();
      if(newTodoInput){
        dispatch(createTodo({
          id: uuid(),
          task: newTodoInput,
          isComplete: false
        }))
      }
      setNewTodoInput(e.target.reset())
    };
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