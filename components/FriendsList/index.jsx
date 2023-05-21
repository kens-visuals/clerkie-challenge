/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Link from 'next/link';
import { use, useEffect, useState, useRef } from 'react';

import FreindsCard from '../FriendsCard';

import styles from './styles.module.css';

export const getFriends = async (slug) => {
  const data = await fetch('/data.json');
  const friends = await data.json();

  if (slug) {
    const friend = friends.filter((friend) => friend.slug === slug);
    return friend;
  } else {
    return friends;
  }
};

const getFreindsPriomise = getFriends();

export default function FriendsList({ query, selectedOptions }) {
  const friends = use(getFreindsPriomise);

  const [isLoading, setIsLoading] = useState(true);
  const [endIndex, setEndIndex] = useState(10);
  const observerTarget = useRef(null);

  console.log(query);

  // This useEffect sets the initial loading effect when the page just loaded
  // or when a user goes from page-to-page
  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const fetchData = () => {
      setEndIndex((prevEndIndex) => prevEndIndex + 10);
    };

    const target = observerTarget.current;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && endIndex <= friends.length) {
          if (endIndex <= friends.length) {
            fetchData();
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 2000);
          }
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [observerTarget]);

  // This useEffect prevents from endIndex going over the limit
  // and repetitive loading effect when reached the end of page
  useEffect(() => {
    if (endIndex > friends.length) {
      setEndIndex(friends.length);
      setIsLoading(false);
    }
  }, [endIndex]);

  return (
    <>
      <ul className={styles.list}>
        {friends
          .slice(0, endIndex)
          .filter(
            (friend) =>
              selectedOptions.length === 0 ||
              selectedOptions.includes(friend.status)
          )
          .filter(
            (friend) =>
              friend.name.toLowerCase().includes(query.toLowerCase()) ||
              friend.email.toLowerCase().includes(query.toLowerCase()) ||
              friend.phoneNumber.toLowerCase().includes(query.toLowerCase())
          )
          .map((friend) => (
            <li key={friend.id}>
              <Link href={`/friends/${friend.slug}`}>
                <FreindsCard {...friend} isLoading={isLoading} />
              </Link>
            </li>
          ))}
      </ul>
      <div ref={observerTarget} />
    </>
  );
}
