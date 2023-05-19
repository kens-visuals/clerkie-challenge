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
      icon: home,
    },
    {
      name: 'Friends',
      route: '/friends',
      icon: friends,
    },
  ];

  return (
    <div className={styles.nav}>
      <div className={styles.navWrapper}>
        <div className={styles.logoContainer}>
          <Image src={logo} width={20} height={20} alt="Clerkie" />
          <span className={styles.logoSpan}>Clerkie Challenge</span>
        </div>

        <ul className={styles.navList}>
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={
                pathname === item.route ? styles.activeLink : undefined
              }
            >
              <Link href={item.route} className={styles.navListItem}>
                <Image src={item.icon} width={24} height={24} alt={item} />
                <span className={styles.listSpan}>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
