'use client';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';

export default function Banner() {
  const pathname = usePathname();

  return (
    <div className={styles.bannerContainer}>
      <span className={styles.bannerSpan}>
        {pathname === '/' ? 'Home' : 'Friends'}
      </span>
    </div>
  );
}
