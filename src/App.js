import React from 'react';
import TodoInput from './components/TodoInput';
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
