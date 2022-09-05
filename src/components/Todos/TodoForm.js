import { useState } from 'react';
import Button from '../UI/Button';
import styles from './TodoForm.module.css';

export default function TodoForm({ addTodo, error }) {
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
      <form className={`${error ? styles.error : ''}`}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button onClick={addNewTodo} title="Add task">
          Add
        </Button>
      </form>
    </div>
  );
}
