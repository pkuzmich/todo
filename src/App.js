import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
  // Task array state
  const [todos, setTodos] = useState([]);

  // Adding a new task to the array of tasks
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  // Deleting a task
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="App">
      <h1 className="App-title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />

      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default App;
