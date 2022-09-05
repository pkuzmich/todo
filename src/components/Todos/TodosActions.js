import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

export default function TodosActions() {
  return (
    <div className={styles.actionsContainer}>
      <Button title="Reset tasks">
        <RiRefreshLine />
      </Button>
      <Button title="Delete all tasks">
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
