import styles from './styles.module.css';

export default function FreindsCard({
  name,
  email,
  phoneNumber,
  status,
  isLoading,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.spanWrapper}>
        {isLoading ? (
          <div className={`${styles.loading} ${styles.loadingBar}`} />
        ) : (
          <span className={styles.name}>{name}</span>
        )}

        {isLoading ? (
          <div className={`${styles.loading} ${styles.loadingBarLong}`} />
        ) : (
          status && (
            <span
              className={`${styles.status} ${
                status === 'Close Friends'
                  ? styles.closeFriends
                  : styles.superCloseFriends
              }`}
            >
              {status}
            </span>
          )
        )}
      </div>
      <div>
        {isLoading ? (
          <div className={`${styles.loading} ${styles.loadingBarShort}`} />
        ) : (
          <span className={styles.phoneAndEmail}>{email} • </span>
        )}
        {isLoading ? (
          <div className={`${styles.loading} ${styles.loadingBarShortest}`} />
        ) : (
          <span className={styles.phoneAndEmail}>{phoneNumber}</span>
        )}
      </div>
    </div>
  );
}
