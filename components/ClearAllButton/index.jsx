import styles from './styles.module.css';

export default function ClearAllButton({ selectedOptions, handleFilterReset }) {
  return (
    <button
      type="button"
      onClick={handleFilterReset}
      disabled={!selectedOptions.length}
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
