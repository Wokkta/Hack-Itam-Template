import { Link } from 'react-router-dom';
import { Select } from 'antd';
function Header() {
  return (
    <nav style={{ margin: 10 }}>
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
      <Link to="/user" style={{ padding: 5 }}>
        ЛК
      </Link>
      <Link to="/:id">12</Link>
    </nav>
  );
}

export default Header;
