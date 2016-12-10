import React from 'react';
import TodoList from './containers/TodoList';
import AddTodo from './containers/AddTodo';

function App() {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <AddTodo/>
      <TodoList/>
    </div>
  );
}

export default App;
