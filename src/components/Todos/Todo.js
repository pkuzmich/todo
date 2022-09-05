import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

export default function Todo({ todo, index, deleteTodo }) {
  return (
    <li className={styles.item} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.itemIcon} />
      <span className={styles.itemText}>{todo}</span>
    </li>
  );
}
