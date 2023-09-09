import { useState } from 'react';
import { Typography, Avatar, Button, Menu } from 'antd';
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
    {
      label: 'Используемые технологии',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'JavaScript, HTML, CSS, Node.js, React',
    },
    {
      label: 'Используемые языки программирования',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'JavaScript, HTML, CSS',
    },
    {
      label: 'Количество созданных материалов',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: '50',
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
    media: {
      microsoftTeams: 'https://microsoft.com',
      telegram: 'https://telegram',
      vk: 'https://vk.com',
    },
  }; /// Заменить на норм дату

  const handleChangeCategory = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  const handleOpenPortfolio = () => {
    window.open(data?.portfolio, '_blank');
  };
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100vw',
        paddingLeft: '10%',
      }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '400px',
          flexWrap: 'wrap',
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
          <Title>{data?.username}</Title>
          <Text level={2}>{data?.fio}</Text>

          <div
            style={{
              minWidth: '150px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              marginTop: '20px',
            }}>
            {data?.media?.telegram && (
              <a href={data.telegram}>
                <img src={TelegramIcon} alt="Telegram" style={{ width: '30px', height: '30px' }} />
              </a>
            )}
            {data?.media?.microsoftTeams && (
              <a href={data.microsoftTeams}>
                <img
                  src={MSTeamsIcon}
                  alt="Microsoft Teams"
                  style={{ width: '30px', height: '30px' }}
                />
              </a>
            )}
            {data?.media?.vk && (
              <a href={data.vk}>
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
