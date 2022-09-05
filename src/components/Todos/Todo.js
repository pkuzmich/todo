import styles from './Todo.module.css';

export default function Todo({ todo }) {
  return (
    <li className={styles.todo}>
      <span className={styles.todoText}>{todo}</span>
    </li>
  );
}
