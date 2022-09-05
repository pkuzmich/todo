import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm({ addTodo }) {
  // Create a managed element of the task array
  const [text, setText] = useState('');

  // Function to add a new task
  const addNewTodo = (e) => {
    e.preventDefault();
    addTodo(text);

    // Clearing the input after adding a task - resetting the state
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </form>
    </div>
  );
}
