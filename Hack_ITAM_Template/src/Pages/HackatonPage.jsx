import { useParams } from 'react-router-dom';
import NotFound from './NotFoundPage';
import React, { useState } from 'react';
import { Modal, Form, Input, Select, Switch, Button, notification } from 'antd';
import HackatonContent from '../components/HackatonContent';
import useFetchHackaton from '../hooks/useFetchHackaton';
import { useSelector } from 'react-redux';
const { Option } = Select;

const HackatonPage = () => {
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const hackaton = useFetchHackaton(id);
  const hackatons = useSelector((state) => state.hackatons);
  const hack = hackatons.filter((el) => el.id === id);
  const data = {
    title: hackaton?.title || hack[0]?.title || '',
    location: hackaton?.location || hack[0]?.location || '',
    format: hackaton?.format || hack[0]?.format || '',
    teamComposition: hackaton?.team?.length || hack[0]?.team?.length || '3-5 участников',
    rating: hackaton?.rating || hack[0]?.rating || 0,
    solutions: hackaton?.solutions ||
      hack[0]?.solutions || [
        { title: 'Решение 1', link: 'https://youtube.com' },
        { title: 'Решение 2', link: 'https://figma.com' },
        { title: 'Решение 3', link: 'https://github.com' },
      ],
    photo: hackaton?.photo || hack[0]?.photo || 'https://example.com/hackaton1.jpg',
    dates: hackaton?.dates?.[0] || hack[0]?.dates?.[0] || 'неизвестно',
    registrationDates: hackaton?.dates?.[1] || hack[0]?.dates?.[1] || 'неизвестно',
    description:
      hackaton?.description ||
      hack[0]?.description ||
      'Это описание хакатона 1. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis!',
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleOk = (values) => {
    console.log('Form values:', values);
    setVisible(false);
    notification.success({
      message: 'Заявка на хакатон отправлена',
      description: 'Ваша заявка отправлена на рассмотрение.',
    });
  };

  return (
    <section>
      <div>{<HackatonContent id={id || ''} data={data} /> || <NotFound />}</div>
      <div style={{ margin: '0px 50% 100px' }}>
        <Button type="primary" onClick={showModal}>
          Зарегистрироваться
        </Button>
      </div>

      <RegistrationModal visible={visible} onCancel={handleCancel} onOk={handleOk} />
    </section>
  );
};

export default HackatonPage;

const RegistrationModal = ({ visible, onCancel, onOk }) => {
  const [form] = Form.useForm();
  const [userLeads] = useState(['Вариант 1', 'Вариант 2', 'Вариант 3']);
  const [user, setUser] = useState(null);

  const handleUserChange = (checked) => {
    setUser(checked ? 'user' : null);
  };

  const handleOk = () => {
    form.validateFields().then((values) => {
      onOk(values);
      form.resetFields();
    });
  };

  return (
    <Modal title="Регистрация" open={visible} onOk={handleOk} onCancel={onCancel} width={1000}>
      <Form form={form}>
        {user?.userLeads && (
          <Form.Item label="От команды">
            <Select>
              {user.userLeads.map((option) => (
                <Option key={option} value={option}>
                  {option}
                </Option>
              ))}
            </Select>
          </Form.Item>
        )}

        <Form.Item label="Зарегистрироваться самому">
          <Switch onChange={handleUserChange} />
        </Form.Item>

        {user && (
          <>
            <Form.Item
              label="ФИО"
              name="name"
              rules={[{ required: true, message: 'Введите ваше ФИО' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Контакты"
              name="contacts"
              rules={[{ required: true, message: 'Введите ваши контакты' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Роль"
              name="role"
              rules={[{ required: true, message: 'Введите вашу роль' }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Стек"
              name="stack"
              rules={[{ required: true, message: 'Введите ваш стек' }]}>
              <Input />
            </Form.Item>
          </>
        )}
      </Form>
    </Modal>
  );
};
