import styles from './styles.module.css';

export default function FreindsCard({
  name,
  email,
  phoneNumber,
  status,
  isLoading,
}) {
  return (
    <div
      className={
        isLoading
          ? `${styles.cardContainer} ${styles.loadingCardContainer}`
          : styles.cardContainer
      }
    >
      {isLoading ? (
        <div
          className={`${styles.loadingSpanWrapper} ${styles.loadingSpanWrapperLeft}`}
        >
          <div className={`${styles.loading} ${styles.loadingBar}`} />
          <div className={`${styles.loading} ${styles.loadingBarLong}`} />
        </div>
      ) : (
        <div className={styles.spanWrapper}>
          <span className={styles.name}>{name}</span>

          {status && (
            <span
              className={`${styles.status} ${
                status === 'Close Friends'
                  ? styles.closeFriends
                  : styles.superCloseFriends
              }`}
            >
              {status}
            </span>
          )}
        </div>
      )}

      {isLoading ? (
        <div
          className={`${styles.loadingSpanWrapper} ${styles.loadingSpanWrapperRight}`}
        >
          <div
            className={`${styles.loading} ${styles.loadingBarReversed} ${styles.loadingBarShort}`}
          />
          <div
            className={`${styles.loading} ${styles.loadingBarReversed} ${styles.loadingBarShortest}`}
          />
        </div>
      ) : (
        <div className={styles.personalInforWrapper}>
          <span className={styles.phoneAndEmail}>{email}</span>

          {!isLoading && <span className={styles.phoneAndEmail}>•</span>}

          <span className={styles.phoneAndEmail}>{phoneNumber}</span>
        </div>
      )}
    </div>
  );
}
