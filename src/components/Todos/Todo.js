import styles from './Todo.module.css';

export default function Todo({ todo, index, deleteTodo }) {
  return (
    <li className={styles.item} onDoubleClick={() => deleteTodo(index)}>
      <span className={styles.itemText}>{todo}</span>
    </li>
  );
}
