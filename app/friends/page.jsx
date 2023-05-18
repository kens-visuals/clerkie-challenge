'use client';
import { useState } from 'react';
import Image from 'next/image';

import Filters from '@/components/Filters';
import ClearAllButton from '@/components/ClearAllButton';
import FriendsList from '@/components/FriendsList';

import styles from './styles.module.css';

import filterIcon from '../../public/filter-icon.svg';

export default function Frineds() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleFilter = () => setIsFilterOpen((prevState) => !prevState);

  const handleFilterReset = () => setSelectedOptions([]);

  return (
    <div className={styles.container}>
      <div className={styles.filterButtonContainer}>
        <button
          type="button"
          onClick={handleToggleFilter}
          className={
            isFilterOpen
              ? `${styles.filterButton} ${styles.filterButtonActive}`
              : `${styles.filterButton} ${styles.filterButtonDefault}`
          }
        >
          <Image src={filterIcon} width={20} height={20} alt="filter" />
          {selectedOptions.length > 0 && (
            <span className={styles.filterCount}>{selectedOptions.length}</span>
          )}
        </button>
        <div className={styles.divider} />

        <ClearAllButton
          selectedOptions={selectedOptions}
          handleFilterReset={handleFilterReset}
        />

        {isFilterOpen && (
          <Filters
            selectedOptions={selectedOptions}
            setIsFilterOpen={setIsFilterOpen}
            handleFilterReset={handleFilterReset}
            setSelectedOptions={setSelectedOptions}
          />
        )}
      </div>

      <FriendsList selectedOptions={selectedOptions} />
    </div>
  );
}
