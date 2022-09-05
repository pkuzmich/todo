import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

export default function Todo({ todo, deleteTodo, toggleComplete }) {
  return (
    <li
      className={`${styles.item} ${todo.isCompleted ? styles.completed : ''}`}
    >
      <RiTodoFill className={styles.itemIcon} />

      <span className={styles.itemText}>{todo.text}</span>

      <RiDeleteBin2Line
        className={styles.deleteIcon}
        onClick={() => deleteTodo(todo.id)}
      />

      <FaCheck
        className={styles.checkIcon}
        onClick={() => toggleComplete(todo.id)}
      />
    </li>
  );
}
