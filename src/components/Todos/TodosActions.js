import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

export default function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedExist,
}) {
  return (
    <div>
      <Button title="Reset all tasks" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>

      <Button
        title="Delete all completed tasks"
        onClick={deleteCompletedTodos}
        disable={+!completedExist}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
