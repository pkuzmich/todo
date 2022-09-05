import styles from './Button.module.css';

export default function Button(props) {
  const { children, disable = false } = props;

  return (
    <button {...props} className={styles.button} disabled={disable}>
      {children}
    </button>
  );
}
