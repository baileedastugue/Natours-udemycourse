import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import {v4 as uuidv4} from 'uuid';
import {Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [...prevTodos, 
    {id: uuidv4(), text: text}]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler}/>
      <TodoList items={todos}/>
    </div>
  );
}

export default App;
