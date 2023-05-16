import Image from 'next/image';

import styles from './styles.module.css';

import closeIcon from '../../public/close-icon.svg';

export default function Filters() {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtonsWrapper}>
        <button type="button" className={styles.clearAllButton}>
          Clear all
        </button>
        <span className={styles.filterSpanHeading}>Filter</span>
        <button type="button" className={styles.closeButton}>
          <Image src={closeIcon} width={17} height={17} alt="close" />
        </button>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.checkboxesContainer}>
          <span className={styles.friendStatusSpan}>Friend Status</span>

          <div className={styles.checkboxWrapper}>
            <label className={styles.checkboxLabel} htmlFor="close-friends">
              Close Friends
            </label>
            <input
              id="close-friends"
              type="checkbox"
              className={styles.checkbox}
            />
          </div>
          <div className={styles.checkboxWrapper}>
            <label
              className={styles.checkboxLabel}
              htmlFor="super-close-friends"
            >
              Super Close Friends
            </label>
            <input
              id="super-close-friends"
              type="checkbox"
              className={styles.checkbox}
            />
          </div>
        </div>

        <button type="button" className={styles.applyButton}>
          Apply
        </button>
      </div>
    </div>
  );
}
