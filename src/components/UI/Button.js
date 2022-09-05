import styles from './Button.module.css';

export default function Button({ onClick, children, title, disable = false }) {
  return (
    <button
      className={styles.button}
      title={title}
      onClick={onClick}
      disabled={disable}
    >
      {children}
    </button>
  );
}
