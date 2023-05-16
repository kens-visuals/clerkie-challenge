'use client';
import { useState } from 'react';
import Image from 'next/image';

import Filters from '@/components/Filters';
import ClearAllButton from '@/components/ClearAllButton';

import styles from './styles.module.css';

import filterIcon from '../../public/filter-icon.svg';

export default function Frineds() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleToggleFilter = () => setIsFilterOpen((prevState) => !prevState);

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button
          type="button"
          onClick={handleToggleFilter}
          className={styles.filterButton}
        >
          <Image src={filterIcon} width={20} height={20} alt="filter" />
        </button>
        <div className={styles.divider} />

        <ClearAllButton />

        {isFilterOpen && <Filters setIsFilterOpen={setIsFilterOpen} />}
      </div>
    </div>
  );
}
