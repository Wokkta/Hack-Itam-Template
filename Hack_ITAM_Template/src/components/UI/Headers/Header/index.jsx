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
          Регистрация
        </Link>
        <Link to="/auth" style={{ padding: 5 }}>
          Авторизация
        </Link>
        {userId ? (
          <Link to={`/user/${userId}`} style={{ padding: 5 }}>
            <span>Личный кабинет</span>
          </Link>
        ) : (
          <Link to="/registration" style={{ padding: 5 }}>
            <span>Личный кабинет</span>
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
