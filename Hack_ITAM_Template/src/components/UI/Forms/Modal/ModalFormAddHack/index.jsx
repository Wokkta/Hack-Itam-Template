import { Modal, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setHackatons } from '../../../../../store/Slices/hackatonsSlice';
import usePostHackaton from '../../../../../hooks/usePostHackaton';

const initialUserState = {
  title: 'Хакатон имени Чувака',
  dates: {
    проведения: '1 сентября - пока не надоест',
    регистрации: '1 сентября - пока не надоест',
  },
  format: 'online',
  location: 'online',
  registrationOpen: false,
  photo:
    'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-jJbpV230i3Y%2FUS_eINWgTWI%2FAAAAAAAADzI%2FQsqxRA5MjbQ%2Fs1600%2FThe%2BDude.png&f=1&nofb=1&ipt=f8e062e20c034c6dbbd2a4d7a1c426a63542f0da7c264636f8141545f24a42e0&ipo=images',
  id: 1,
};

const ModalFormAddHack = ({ visible, onCancel, onOk, close }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const hacks = useSelector((state) => state.hackatons);

  const onFinish = (values) => {
    onOk(values);
    console.log(values, 'values');
    const newValue = [...hacks, values];
    newValue[newValue.length - 1]['id'] = hacks.length + 1;
    dispatch(setHackatons(newValue));
    usePostHackaton(values);
    form.resetFields();
    close();
  };

  return (
    <Modal visible={visible} onCancel={onCancel} onOk={() => form.submit()}>
      <Form form={form} name="userForm" onFinish={onFinish}>
        <Form.Item
          name="title"
          label="Название"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите название' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['dates', 'проведения']}
          label="Дата проведения"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите дату проведения' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={['dates', 'регистрации']}
          label="Дата регистрации"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите дату регистрации' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="format"
          label="Формат"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите формат' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="location"
          label="Место проведения"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите место проведения' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="photo"
          label="Фото"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите URL фото' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Описание"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите описание' }]}>
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="website"
          label="Ссылка на сайт"
          labelCol={{ span: 24 }}
          rules={[{ required: true, message: 'Пожалуйста, введите ссылку на сайт' }]}>
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormAddHack;
