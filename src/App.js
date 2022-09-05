import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';
import TodosActions from './components/Todos/TodosActions';

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

  // Completing a task
  const toggleCompleteHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  // Reset all tasks
  const resetTodosHandler = () => {
    setTodos([]);
  };

  // Delete all completed tasks
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  return (
    <div className="App">
      <h1 className="App-title">Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodosActions
        resetTodos={resetTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler}
      />
      {todos.length > 0 ? (
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleComplete={toggleCompleteHandler}
        />
      ) : (
        <h2>Todo list is empty</h2>
      )}
    </div>
  );
}

export default App;
