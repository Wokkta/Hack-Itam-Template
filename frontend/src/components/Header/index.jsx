import { Link } from 'react-router-dom';

import styles from './Header.module.sass';
import { Button } from 'antd';
import { useState } from 'react';
import { useSelector } from 'react-redux';
function Header() {
  const userId = useSelector((state) => state.user.id);

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
        <Link to="/registration" style={{ padding: 5 }}>
          Test
        </Link>
        {userId ? (
          <Link to={`/user/${userId}`} style={{ padding: 5 }}>
            <Button>ЛК</Button>
          </Link>
        ) : (
          <Link to="/registration" style={{ padding: 5 }}>
            <Button>ЛК</Button>
          </Link>
        )}
        /// change way
        <Link to="/:id">12</Link>
      </nav>
    </header>
  );
}

export default Header;
