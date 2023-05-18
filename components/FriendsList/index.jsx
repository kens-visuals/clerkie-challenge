'use client';
import { use, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import FreindsCard from '../FriendsCard';

import styles from './styles.module.css';

const getFriends = async () => {
  const data = await fetch('/data.json');
  const friends = await data.json();

  return friends;
};

const getFreindsPriomise = getFriends();

export default function FriendsList({ selectedOptions }) {
  const friends = use(getFreindsPriomise);

  const [visibleItems, setVisibleItems] = useState(10);
  const [data, setData] = useState(friends.slice(0, 10));
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMoreItems, setHasMoreItems] = useState(true);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      hasMoreItems
    ) {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const startIndex = (currentPage - 1) * 10;
      const endIndex = startIndex + 10;
      const newData = friends.slice(startIndex, endIndex);

      setData((prevData) => [...prevData, ...newData]);
      setIsLoading(false);
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    if (data.length >= friends.length) {
      setHasMoreItems(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ul className={styles.list}>
      {data
        .filter(
          (friend) =>
            selectedOptions.length === 0 ||
            selectedOptions.includes(friend.status)
        )
        .map((friend) => (
          <li key={uuidv4()}>
            <FreindsCard {...friend} isLoading={isLoading} />
          </li>
        ))}
    </ul>
  );
}
