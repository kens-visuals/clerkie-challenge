import styles from './styles.module.css';

export default function SearchComponent({ query, setQuery }) {
  const handleInputChange = (e) => setQuery(e.target.value);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search: e.g name, email or phone"
        className={styles.searchInput}
      />
    </>
  );
}
