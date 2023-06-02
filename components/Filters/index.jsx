'use client';

import { useState } from 'react';
import Image from 'next/image';

import ClearAllButton from '../ClearAllButton';
import DateModal from '../DateModal';

import styles from './styles.module.css';

import closeIcon from '../../public/close-icon.svg';
import calendarIcon from '../../public/calendar-icon.svg';

export default function Filters({
  selectedOptions,
  setIsFilterOpen,
  handleFilterReset,
  setSelectedOptions,
  setStartAndEndDate,
}) {
  const [tempSelectedOptions, setTempSelectedOptions] =
    useState(selectedOptions);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleCheckboxToggle = (option) =>
    setTempSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((selectedOption) => selectedOption !== option)
        : [...prevOptions, option]
    );

  const handleApplyFilters = () => {
    setSelectedOptions(tempSelectedOptions);
    setIsFilterOpen(false);
    setStartAndEndDate([startDate, endDate]);
  };

  return (
    <div className={styles.filterContainer}>
      {isCalendarVisible && (
        <DateModal
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          setStartAndEndDate={setStartAndEndDate}
        />
      )}

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
              <label
                className={styles.checkboxLabel}
                htmlFor={option}
                onMouseEnter={() =>
                  option === 'Friends Since' && setIsCalendarVisible(true)
                }
              >
                {option}
                {option === 'Friends Since' && (
                  <Image
                    src={calendarIcon}
                    alt="Friends Since"
                    width={17}
                    height={17}
                  />
                )}
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
          <div className={styles.checkboxWrapper}>
            <label
              className={styles.checkboxLabel}
              onMouseEnter={() => setIsCalendarVisible(true)}
            >
              Friends Since
              <Image
                src={calendarIcon}
                alt="Friends Since"
                width={17}
                height={17}
              />
            </label>
          </div>
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
