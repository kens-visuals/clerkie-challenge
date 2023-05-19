'use client';

import Link from 'next/link';
import Image from 'next/image';

import { getFriends } from '../../../components/FriendsList/index';

import styles from './styles.module.css';

export async function generateStaticParams() {
  const friends = await getFriends().json();

  return friends.map((friend) => ({
    slug: slug,
  }));
}

export default async function Friend({ params }) {
  const [friend] = await getFriends(params.slug);

  const { image, name, status, phoneNumber, email, about, dateAdded } = friend;

  const rawDate = new Date(dateAdded);
  const formarDate = new Intl.DateTimeFormat('en-US').format(rawDate);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileWrapper}>
        <Image
          width={110}
          height={110}
          alt={name}
          src={image}
          className={styles.profileImg}
        />
        <div className={styles.infoWrapper}>
          <h1>{name}</h1>
          <span className={styles.status}>
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
          </span>
          <span>
            You&apos;re friends since <i>{formarDate}</i>
          </span>
        </div>
      </div>
      <div className={styles.contactInfoWrapper}>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Personal Information</legend>
          <span>
            <strong>Phone:</strong> {phoneNumber}
          </span>
          <span>
            <strong>Email:</strong> {email}
          </span>
        </fieldset>
      </div>

      <div>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>About {name}</legend>

          <p>{about}</p>
        </fieldset>
      </div>
      <Link href="/friends" className={styles.goBackButton}>
        Go Back
      </Link>
    </div>
  );
}
