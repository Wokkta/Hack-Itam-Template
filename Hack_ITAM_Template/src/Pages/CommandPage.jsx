import { useRef } from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import HackatonsList from '../components/HackatonsList';
import Title from 'antd/es/typography/Title';

const { Meta } = Card;

function CommandPage() {
  const { id } = useRef();

  const teamName = 'Team Alpha';
  const users = [
    {
      id: 1,
      username: 'user1',
      avatar: 'https://example.com/avatar1.jpg',
    },
    {
      id: 2,
      username: 'user2',
      avatar: 'https://example.com/avatar2.jpg',
    },
    {
      id: 3,
      username: 'user3',
      avatar: 'https://example.com/avatar3.jpg',
    },
  ];

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100vw',
        paddingLeft: '10%',
      }}>
      <h1>{teamName}</h1>

      <div>
        {users.map((user) => (
          <Link to={`/user/${user.id}`} key={user.id}>
            <Card style={{ width: 300, marginBottom: 16 }}>
              <Meta avatar={<Avatar src={user.avatar} />} title={user.username} />
            </Card>
          </Link>
        ))}
      </div>
      <Title>Хакатоны команды</Title>
      <HackatonsList />
    </section>
  );
}

export default CommandPage;
