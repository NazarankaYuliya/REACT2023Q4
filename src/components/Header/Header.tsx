import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.app_header}>
      <img src="img/Star_Wars_Logo.png" alt="Logo" width={250} />
      <h1 className={styles.header_title}>Search App</h1>
    </header>
  );
}

export default Header;
