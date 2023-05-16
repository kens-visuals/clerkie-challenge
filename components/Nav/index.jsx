'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import styles from './styles.module.css';
import logo from '../../public/logo.svg';
import home from '../../public/home-icon.svg';
import friends from '../../public/friends-icon.svg';

export default function Nav() {
  const pathname = usePathname();
  const menuItems = [
    {
      name: 'Home',
      route: '/',
    },
    {
      name: 'Friends',
      route: '/friends',
    },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <Image src={logo} width={35} height={35} alt="Clerkie" />
        <span className={styles.logoSpan}>Clerkie Challenge</span>
      </div>

      <ul className={styles.navList}>
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={pathname === item.route && styles.activeLink}
          >
            <Link href={item.route} className={styles.navListItem}>
              <Image src={home} width={24} height={24} alt={item} />
              <span className={styles.listSpan}>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
