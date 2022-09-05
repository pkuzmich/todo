import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
}
