import {
  format,
  getDay,
  isToday,
  isAfter,
  isSameDay,
  isWithinInterval,
} from 'date-fns';

import styles from './styles.module.css';

export default function Calendar({
  days,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const handleDayClick = (day) => {
    if (!startDate) {
      setStartDate(day);
      setEndDate(null);
    } else if (!endDate) {
      if (day < startDate) {
        setEndDate(startDate);
        setStartDate(day);
      } else {
        setEndDate(day);
      }
    } else {
      setStartDate(day);
      setEndDate(null);
    }
  };

  const getGridStart = (day) => {
    const dayOfWeek = getDay(day);
    return dayOfWeek + 1;
  };

  return (
    <div className={styles.calendarContainer}>
      <ul className={styles.weekdays}>
        {weekdays.map((days) => (
          <li key={days}>{days}</li>
        ))}
      </ul>

      <ul className={styles.daysContainer}>
        {days.map((day) => (
          <li key={day} style={{ gridColumnStart: getGridStart(day) }}>
            <button
              type="button"
              disabled={isAfter(day, new Date())}
              onClick={() => handleDayClick(day)}
              className={`
              ${styles.day} 
              ${isToday(day) ? styles.today : ''} 
              ${isAfter(day, new Date()) ? styles.futureDates : ''} 
              
              ${
                startDate &&
                endDate &&
                isWithinInterval(day, {
                  start: startDate,
                  end: endDate,
                })
                  ? `${styles.selectedRange} ${styles.selectedStartDate}`
                  : ''
              }
              `}
            >
              <span
                className={
                  isSameDay(day, startDate) || isSameDay(day, endDate)
                    ? styles.selectedDate
                    : ''
                }
              >
                {format(day, 'd')}
              </span>
              {isToday(day) && <span className={styles.todaySpan}>Today</span>}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
