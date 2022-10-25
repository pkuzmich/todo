import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';
import TodosActions from './components/Todos/TodosActions';
import {Toolbar} from "./components/UI/Toolbar";

function App() {
  // Task array state
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  // Adding a new task to the array of tasks
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    if (newTodo.text) {
      setTodos([...todos, newTodo]);
      setError(false);
    } else {
      setError(true);
    }
  };

  // Deleting a task
  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Completing a task
  const toggleCompleteHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
    setError(false);
  };

  // Reset all tasks
  const resetTodosHandler = () => {
    setTodos([]);
    setError(false);
  };

  // Delete all completed tasks
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
    setError(false);
  };

  // Completed tasks counter
  const completedCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <h1 className="App-title">Todo App</h1>

      <Toolbar>
        <TodoForm addTodo={addTodoHandler} error={error} />

        {todos.length > 0 && (
          <TodosActions
            resetTodos={resetTodosHandler}
            deleteCompletedTodos={deleteCompletedTodosHandler}
            completedExist={!!completedCount /* !!0 = false, !!number = true */}
          />
        )}
      </Toolbar>

      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleComplete={toggleCompleteHandler}
        />
      ) : (
        <h2>Todo list is empty</h2>
      )}

      {completedCount > 0 && (
        <h2>{`You have completed ${completedCount} ${
          completedCount > 1 ? 'todos' : 'todo'
        }`}</h2>
      )}

      {error && <h2 className="error">Todo is empty</h2>}
    </div>
  );
}

export default App;
