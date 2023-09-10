import { useState } from 'react';
import { Typography, Avatar, Button, Menu, Alert, Spin } from 'antd';
import {
  CommentOutlined,
  AntDesignOutlined,
  MailOutlined,
  RadarChartOutlined,
  StockOutlined,
} from '@ant-design/icons';
import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
const { Title, Text } = Typography;
import CommandsList from '../components/commandsList';
import UserHackatonList from '../components/UserHackatonList';
import TelegramIcon from '../assets/TelegramIcon.png';
import VKIcon from '../assets/VKIcon.png';
import MSTeamsIcon from '../assets/MSTeamsIcon.png';
import HackatonsList from '../components/HackatonsList';

import useFetchUser from '../hooks/useFetchUser';
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

  const { user, loading, error } = useFetchUser(id);

  const SectionsComponents = {
    hackatons: <HackatonsList />,
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
        items={user?.Descriptions_items}
      />
    ),
  };

  const handleChangeCategory = (e) => {
    console.log('click ', e);
    setCurrent(e.key); //// заменить на норм обработку
  };
  const handleOpenPortfolio = () => {
    window.open(user?.portfolio, '_blank');
  };
  if (loading) return <Spin size="large" />;

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100vw',
        paddingLeft: '10%',
      }}>
      {!error ? <Alert message={`Error: ${error.message}`} type="error" /> : <></>}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '400px',
          flexWrap: 'wrap',
        }}>
        {user.url ? (
          <Avatar size={100} src={<img src={user.url} alt="avatar" />} />
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
          <Title>@{user?.username}</Title>
          <Text level={2}>{user?.name}</Text>

          <div
            style={{
              minWidth: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              marginTop: '20px',
            }}>
            {user?.social_networks?.telegram && (
              <a href={user.telegram}>
                <img src={TelegramIcon} alt="Telegram" style={{ width: '30px', height: '30px' }} />
              </a>
            )}
            {user?.social_networks?.microsoftTeams && (
              <a href={user.microsoftTeams}>
                <img
                  src={MSTeamsIcon}
                  alt="Microsoft Teams"
                  style={{ width: '30px', height: '30px' }}
                />
              </a>
            )}
            {user?.social_networks?.vk && (
              <a href={user.vk}>
                <img src={VKIcon} alt="VK" style={{ width: '30px', height: '30px' }} />
              </a>
            )}
            <Button type="primary" onClick={handleOpenPortfolio}>
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
