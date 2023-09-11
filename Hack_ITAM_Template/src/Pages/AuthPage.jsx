import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

function AuthPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const onFinishStep1 = (values) => {
    setFormData({ ...formData, ...values });
    handleNextStep();
  };

  const onFinishStep2 = (values) => {
    const profileData = {
      url: values.url,
      fio: values.fio,
      username: values.username,
      portfolio: values.portfolio,
      media: {
        microsoftTeams: values.microsoftTeams,
        telegram: values.telegram,
        vk: values.vk,
      },
    };

    console.log('Profile Data:', profileData);
  };

  const data = {
    url: '',
    fio: 'Антонио Бандерас',
    username: 'Zorro',
    portfolio: 'https://example.com/portfolio',
    media: {
      microsoftTeams: 'https://microsoft.com',
      telegram: 'https://telegram',
      vk: 'https://vk.com',
    },
  };

  return (
    <section style={{ display: 'flex', justifyContent: 'center' }}>
      <Form
        name="registration"
        scrollToFirstError
        style={{ maxWidth: '400px' }}
        onFinish={step === 1 ? onFinishStep1 : onFinishStep2}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
            {
              type: 'email',
              message: 'Please enter a valid email address!',
            },
          ]}>
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

export default AuthPage;
