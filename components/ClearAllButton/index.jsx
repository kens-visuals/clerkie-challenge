import styles from './styles.module.css';

export default function ClearAllButton({ selectedOptions, handleFilterReset }) {
  return (
    <button
      type="button"
      onClick={handleFilterReset}
      className={`${styles.clearAllButton} ${
        selectedOptions?.length
          ? styles.clearAllButtonActive
          : styles.clearAllButtonInactive
      }`}
    >
      Clear all
    </button>
  );
}
