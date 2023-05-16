import Image from 'next/image';
import styles from './styles.module.css';
import logo from '../../public/logo.svg';
import home from '../../public/home-icon.svg';
import friends from '../../public/friends-icon.svg';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <Image src={logo} width={35} height={35} alt="Clerkie" />
        <span className={styles.logoSpan}>Clerkie Challenge</span>
      </div>

      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <Image src={home} width={24} height={24} alt="home" />
          <span className={styles.listSpan}>Home</span>
        </li>
        <li className={styles.navListItem}>
          <Image src={friends} width={24} height={24} alt="friends" />
          <span className={styles.listSpan}>Friends</span>
        </li>
      </ul>
    </div>
  );
}
