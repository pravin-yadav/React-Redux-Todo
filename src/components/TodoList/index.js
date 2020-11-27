import React from 'react';


class TodoList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <ul>
                    <li>Buy Groceries</li>
                    <li>Call Jason</li>
                    <li>Dinner Tonight</li>
                    <li>Sports club visit</li>

                </ul>
            </React.Fragment>
        )
    }
}
export default TodoList;