import styles from './Todo.module.css';

export default function Todo({ todo }) {
  return (
    <li className={styles.item}>
      <span className={styles.itemText}>{todo}</span>
    </li>
  );
}
