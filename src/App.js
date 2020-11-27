import React from 'react';
import { v1 as uuid } from 'uuid';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
          </div>
        </div>

        <TodoInput />
    </div>
  );
}

export default App;
