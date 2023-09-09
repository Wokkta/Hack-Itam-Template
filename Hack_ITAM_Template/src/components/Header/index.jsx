import { Link } from 'react-router-dom';
import styles from './Header.module.sass';
function Header() {
  return (
    <header>
      <nav className={styles.content}>
        <Link to="/" style={{ padding: 5 }}>
          Главная
        </Link>
        <Link to="/Materials" style={{ padding: 5 }}>
          Полезные материалы
        </Link>
        <Link to="/Hackatons" style={{ padding: 5 }}>
          Хакатоны
        </Link>
        <Link to="/test" style={{ padding: 5 }}>
          Test
        </Link>
        <Link to="/user/12" style={{ padding: 5 }}>
          ЛК
        </Link>{' '}
        /// change way
        <Link to="/:id">12</Link>
      </nav>
    </header>
  );
}

export default Header;
