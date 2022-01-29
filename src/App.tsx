import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [allTodos, setAllTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      console.log(todo)
      setAllTodos([...allTodos, { id: Date.now(), todo, isDone: false }])
      setTodo('');
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={allTodos} setTodos={setAllTodos} />
      {/* {allTodos.map(t => (
        <li>{t.todo}</li>
      ))
      } */}
    </div>
  );
}

export default App;
