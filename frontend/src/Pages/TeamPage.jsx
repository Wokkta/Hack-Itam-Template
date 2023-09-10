import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Avatar, Button, Modal, Checkbox, notification } from 'antd';
import { Link } from 'react-router-dom';
import HackatonsList from '../components/HackatonsList';
import Title from 'antd/es/typography/Title';
import { useSelector } from 'react-redux';
import ModalForm from '../components/UI/Forms/Modal/ModalFormToTeam';
import useGetTeam from '../hooks/useGetTeam';

const { Meta } = Card;

const TeamPage = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.user);
  const team = useGetTeam(id);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState(null);
  const [selectedPositions, setSelectedPositions] = useState([]);
  const [coverLetter, setCoverLetter] = useState('');

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

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100vw',
        paddingLeft: '10%',
      }}>
      <h1>{team.team_name}</h1>

      <div>
        {team.members.map((user) => (
          <div key={user.id}>
            <Link to={`/user/${user.id}`}>
              <Card style={{ width: 300, marginBottom: 16 }}>
                <Meta
                  avatar={<Avatar src={user.avatar} />}
                  title={`@${user.username}`}
                  description={user.professions.join(', ')}
                />
              </Card>
            </Link>
          </div>
        ))}
      </div>

      <Title level={3}>
        {team.vacancies.length > 0
          ? `Ищем: ${team.vacancies.join(', ')}`
          : 'Набор в команду не идет'}
      </Title>

      {team.vacancies.length > 0 && (
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
        allProfessions={team.vacancies}
        coverLetter={coverLetter}
        setCoverLetter={setCoverLetter}
        selectedPositions={selectedPositions}
        setSelectedPositions={setSelectedPositions}
      />

      {applicationStatus === 'watching' && (
        <div style={{ marginTop: '16px' }}>Ваша заявка на рассмотрении</div>
      )}
    </section>
  );
};

export default TeamPage;
