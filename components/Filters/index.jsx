import { useState } from 'react';
import Image from 'next/image';

import ClearAllButton from '../ClearAllButton';

import styles from './styles.module.css';

import closeIcon from '../../public/close-icon.svg';

export default function Filters({
  selectedOptions,
  setIsFilterOpen,
  handleFilterReset,
  setSelectedOptions,
}) {
  const [tempSelectedOptions, setTempSelectedOptions] =
    useState(selectedOptions);

  const handleCheckboxToggle = (option) =>
    setTempSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((selectedOption) => selectedOption !== option)
        : [...prevOptions, option]
    );

  const handleApplyFilters = () => {
    setSelectedOptions(tempSelectedOptions);
    setIsFilterOpen(false);
  };

  return (
    <div className={styles.filterContainer}>
      <div className={styles.filterButtonsWrapper}>
        <ClearAllButton
          selectedOptions={selectedOptions}
          handleFilterReset={handleFilterReset}
        />

        <span className={styles.filterSpanHeading}>Filter</span>
        <button
          type="button"
          onClick={() => setIsFilterOpen(false)}
          className={styles.closeButton}
        >
          <Image src={closeIcon} width={17} height={17} alt="close" />
        </button>
      </div>

      <div className={styles.optionsContainer}>
        <div className={styles.checkboxesContainer}>
          <span className={styles.friendStatusSpan}>Friend Status</span>

          {['Close Friends', 'Super Close Friends'].map((option) => (
            <div key={option} className={styles.checkboxWrapper}>
              <label className={styles.checkboxLabel} htmlFor={option}>
                {option}
              </label>
              <input
                id={option}
                type="checkbox"
                className={styles.checkbox}
                value={selectedOptions[option]}
                checked={tempSelectedOptions?.includes(option)}
                onChange={() => handleCheckboxToggle(option)}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className={styles.applyButton}
          onClick={handleApplyFilters}
        >
          Apply
        </button>
      </div>
    </div>
  );
}
