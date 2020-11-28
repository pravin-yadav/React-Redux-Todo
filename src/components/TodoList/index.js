import React from 'react';
import TodoItem from '../TodoItem';


class TodoList extends React.Component{
    render(){
        return(
            <React.Fragment>
               <ul className="list-group my-5">
                    <h3 className="text-capitalize text-center"> In Progress</h3>
                    <TodoItem />
                    <button 
                    type="button"
                    className="btn btn-block text-capitalize mt-5"
                    style={{backgroundColor: '#d6d8d9', outline: 0, border: 'none'}}
                    >Reset List</button>
               </ul>
            </React.Fragment>
        )
    }
}
export default TodoList;