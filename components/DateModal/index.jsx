'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  format,
  subYears,
  addMonths,
  subMonths,
  endOfMonth,
  startOfMonth,
  eachDayOfInterval,
} from 'date-fns';

import Calendar from '../Calendar';

import styles from './styles.module.css';

import { monthFormater, yearFormater } from '@/utils/helpers';

import arrowIcon1 from '../../public/arrow-icon.svg';
import arrowIcon2 from '../../public/arrow-icon-2.svg';

export default function DateModal({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setStartAndEndDate,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const previousMonth = subMonths(currentDate, 1);
  const currentYear = yearFormater(currentDate);
  const currentMonthName = monthFormater(currentDate);
  const previousMonthName = monthFormater(previousMonth);
  const newYear =
    previousMonthName === 'December' ? subYears(currentDate, 1) : currentDate;
  const newYearFormatted = yearFormater(newYear);

  const startDay = startOfMonth(currentDate);
  const endDay = endOfMonth(currentDate);

  const previousMonthStartDay = startOfMonth(previousMonth);
  const previousMonthEndDay = endOfMonth(previousMonth);

  const days = eachDayOfInterval({
    start: startDay,
    end: endDay,
  });
  const previousMonthDays = eachDayOfInterval({
    start: previousMonthStartDay,
    end: previousMonthEndDay,
  });

  const handlePreviousMonth = () => {
    setCurrentDate((prevDate) => subMonths(prevDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => addMonths(prevDate, 1));
  };

  // const handleApplyCalendarDates = () => {
  //   if (!startDate || !endDate) return;

  //   setStartAndEndDate([startDate, endDate]);
  // };

  return (
    <div className={styles.dateModalContainer}>
      <div className={styles.dateModalSpanContainer}>
        <span className={styles.dateModalSpan}>
          From {startDate && format(startDate, 'MMM d')} - To{' '}
          {endDate && format(endDate, 'MMM d')}
        </span>

        {/* <button
          type="button"
          className={styles.dateModalButton}
          onClick={handleApplyCalendarDates}
        >
          Apply
        </button> */}
      </div>
      <div className={styles.dateModalCalendarsContainer}>
        <div className={styles.dateModalMonthsContainer}>
          <div className={styles.dateModalMonthsContainer}>
            <button
              type="button"
              className={styles.dateModalArrowButton}
              onClick={handlePreviousMonth}
            >
              <Image src={arrowIcon1} alt="Arrow" width={10} height={20} />
            </button>
            <span className={styles.dateModalMontsSpan}>
              {previousMonthName} {newYearFormatted}
            </span>
          </div>

          <div className={styles.dateModalMonthsContainer}>
            <span className={styles.dateModalMontsSpan}>
              {currentMonthName} {currentYear}
            </span>

            <button
              type="button"
              className={styles.dateModalArrowButton}
              onClick={handleNextMonth}
            >
              <Image src={arrowIcon2} alt="Arrow" width={10} height={20} />
            </button>
          </div>
        </div>

        <div className={styles.calendarsWrapper}>
          <Calendar
            days={previousMonthDays}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />

          <Calendar
            days={days}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </div>
      </div>
    </div>
  );
}
