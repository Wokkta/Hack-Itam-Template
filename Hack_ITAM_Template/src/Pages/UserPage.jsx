import { useState } from 'react';
import { Avatar, Button, Menu } from 'antd';
import {
  CommentOutlined,
  AntDesignOutlined,
  MailOutlined,
  RadarChartOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';

import CommandsList from '../components/commandsList';
import UserHackatonList from '../components/UserHackatonList';

const Sections = [
  {
    label: 'Хакатоны',
    key: 'hackatons',
    icon: <MailOutlined />,
  },
  {
    label: 'Команды',
    key: 'teams',
    icon: <CommentOutlined />,
  },
  {
    label: 'Достижения',
    key: 'achievements',
    icon: <StockOutlined />,
  },
  {
    label: 'Статистика',
    key: 'statistics',
    icon: <RadarChartOutlined />,
  },
];

function UserPage() {
  const [current, setCurrent] = useState('hackatons');
  const { id } = useParams();
  const Descriptions_items = [
    {
      label: 'Количество участий в хакатонах',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: '12',
    },
    {
      label: 'User Id',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: `${id}`,
    },
    {
      label: 'Роль(и)',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'backend developer, frontend developer',
    },
  ];

  const SectionsComponents = {
    hackatons: <UserHackatonList />,
    teams: <CommandsList />,
    achievements: <UserHackatonList />,
    statistics: (
      <Descriptions
        title=""
        bordered
        column={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 4,
          xxl: 4,
        }}
        items={Descriptions_items}
      />
    ),
  };

  const data = {
    url: '',
    fio: ' Антонио Бандерас',
    username: 'Zorro',
    portfolio: 'https://example.com/portfolio',
  }; /// Заменить на норм дату

  const handleChangeCategory = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const handleOpenPortfolio = () => {
    window.open(data?.portfolio, '_blank');
  };
  return (
    <section>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '80vw',
        }}>
        {data.url ? (
          <Avatar size={100} src={<img src={data.url} alt="avatar" />} />
        ) : (
          <Avatar size={100} icon={<AntDesignOutlined />} />
        )}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-around',
            marginLeft: '10px',
          }}>
          <span>{data?.username}</span>
          <span>{data?.fio}</span>
          <div style={{ width: '150px' }}>
            <Button type="primary" onClick={handleOpenPortfolio} style={{ marginTop: '10px' }}>
              Резюме
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginLeft: '10%',
        }}>
        <Menu
          onClick={handleChangeCategory}
          selectedKeys={[current]}
          mode="horizontal"
          items={Sections}
        />
        {SectionsComponents[current]}
      </div>
    </section>
  );
}

export default UserPage;
