import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
