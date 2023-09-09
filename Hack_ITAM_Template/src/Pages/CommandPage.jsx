import { useState } from 'react';
import { Card, Avatar, Button, Modal, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import HackatonsList from '../components/HackatonsList';
import Title from 'antd/es/typography/Title';
import { useSelector } from 'react-redux';
import ModalForm from '../components/UI/Forms/Modal/ModalFormToTeam';

const { Meta } = Card;
const { Option } = Select;

function CommandPage() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const teamName = 'Team Alpha';
  const users = [
    {
      id: 1,
      username: 'user1',
      avatar: 'https://example.com/avatar1.jpg',
      professions: ['Frontend Developer', 'Designer'],
    },
    {
      id: 2,
      username: 'user2',
      avatar: 'https://example.com/avatar2.jpg',
      professions: ['Backend Developer', 'Tester'],
    },
    {
      id: 3,
      username: 'user3',
      avatar: 'https://example.com/avatar3.jpg',
      professions: ['UI/UX Designer'],
    },
  ];

  let allProfessions = [
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'Designer',
    'Tester',
    'Mr BeerMan',
    'Data Soyjack',
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [selectedPositions, setSelectedPositions] = useState([]);

  const showModal = (user) => {
    setSelectedUser(user);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    const requestData = {
      userId: user.id,
      teamId: id,
      coverLetter: `Сопроводительное письмо: ${coverLetter} \n\n Профиль: ${JSON.stringify(user)}`,
      selectedPositions: selectedPositions,
    };

    setApplicationStatus('watching');

    notification.success({
      message: 'Заявка отправлена',
      description: 'Ваша заявка отправлена на рассмотрение.',
    });

    console.log('Заявка отправлена:', requestData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCoverLetter('');
    setSelectedPositions([]);
  };

  const vacancies = allProfessions.filter((profession) => !professions.includes(profession));

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
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>
              <Card style={{ width: 300, marginBottom: 16 }}>
                <Meta
                  avatar={<Avatar src={user.avatar} />}
                  title={user.username}
                  description={user.professions.join(', ')}
                />
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <Title level={3}>
        {vacancies.length > 0 ? `Ищем: ${vacancies.join(', ')}` : 'Набор в команду не идет'}
      </Title>

      {vacancies.length > 0 && (
        <Button type="primary" style={{ marginBottom: '16px' }} onClick={showModal}>
          Подать заявку в команду
        </Button>
      )}

      <Title>Хакатоны команды</Title>
      <HackatonsList />

      <ModalForm
        isVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        allProfessions={allProfessions}
      />

      {applicationStatus === 'watching' && (
        <div style={{ marginTop: '16px' }}>Ваша заявка на рассмотрении</div>
      )}
    </section>
  );
}

export default CommandPage;
