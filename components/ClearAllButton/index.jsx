import styles from './styles.module.css';

export default function ClearAllButton({
  selectedOptions,
  handleFilterReset,
  startAndEndDate,
}) {
  return (
    <button
      type="button"
      onClick={handleFilterReset}
      disabled={!selectedOptions.length && startAndEndDate?.length < 2}
      className={`${styles.clearAllButton} ${
        selectedOptions?.length || startAndEndDate?.length > 2
          ? styles.clearAllButtonActive
          : styles.clearAllButtonInactive
      }`}
    >
      Clear all
    </button>
  );
}
