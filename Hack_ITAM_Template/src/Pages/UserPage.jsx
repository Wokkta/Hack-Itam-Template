import { useState } from 'react';
import { Avatar, Menu } from 'antd';
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
const SectionsComponents = {
  hackatons: <UserHackatonList />,
  teams: <CommandsList />,
  achievements: <UserHackatonList />,
};
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
      children: 'backend developer , frontend developer',
    },
  ];
  const data = false;

  const handleChangeCategory = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <section>
      <div style={{ display: 'flex', justifyContent: 'space-around', width: '80vw' }}>
        {data ? (
          <Avatar
            size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}
            src={<img src={data.url} alt="avatar" />}
          />
        ) : (
          <Avatar
            size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}
            icon={<AntDesignOutlined />}
          />
        )}

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
