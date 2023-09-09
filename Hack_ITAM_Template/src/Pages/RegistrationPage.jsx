import { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';

function RegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [formError, setFormError] = useState(false);

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

  const validateStep2 = (values) => {
    if (!values.url || !values.fio || !values.username) {
      setFormError(true);
      return;
    }

    setFormError(false);
    onFinishStep2(values);
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
        {step === 1 && (
          <>
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

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

            <Form.Item
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject('The two passwords do not match!');
                  },
                }),
              ]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Next
              </Button>
            </Form.Item>
          </>
        )}

        {step === 2 && (
          <>
            <Form.Item label="URL*" name="url" initialValue={data.url}>
              <Input placeholder="URL" />
            </Form.Item>

            <Form.Item label="Full Name*" name="fio" initialValue={data.fio}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item label="Username*" name="username" initialValue={data.username}>
              <Input placeholder="Username" />
            </Form.Item>

            <Form.Item label="Portfolio" name="portfolio" initialValue={data.portfolio}>
              <Input placeholder="Portfolio" />
            </Form.Item>

            <Form.Item
              label="Microsoft Teams"
              name="microsoftTeams"
              initialValue={data.media.microsoftTeams}>
              <Input placeholder="Microsoft Teams" />
            </Form.Item>

            <Form.Item label="Telegram" name="telegram" initialValue={data.media.telegram}>
              <Input placeholder="Telegram" />
            </Form.Item>

            <Form.Item label="VK" name="vk" initialValue={data.media.vk}>
              <Input placeholder="VK" />
            </Form.Item>

            {formError && <p style={{ color: 'red' }}>Please fill out all required fields.</p>}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </section>
  );
}

export default RegistrationPage;
