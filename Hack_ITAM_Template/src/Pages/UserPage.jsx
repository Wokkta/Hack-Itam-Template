import { AntDesignOutlined } from '@ant-design/icons';

import { Avatar, List, Space } from 'antd';

import { Descriptions } from 'antd';
import { useParams } from 'react-router-dom';
import HackatonList from '../components/HackatonList';

const Descriptions_items = [
  {
    label: 'Достижения',
    span: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 2,
      xxl: 2,
    },
    children: '...',
  },
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
    children: '...',
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
    children: '...',
  },
];

function UserPage() {
  const { id } = useParams();
  const data = false;
  return (
    <section>
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
      <HackatonList />
    </section>
  );
}

export default UserPage;
