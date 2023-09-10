import React, { useEffect, useState } from 'react';
import { Button, Form, Radio, Select } from 'antd';

import styles from './HackatonsSorting.module.sass';
import ModalFormAssemblies from '../UI/Forms/Modal/ModalFormJoinAssemblies';

const { Option } = Select;
const initialFieldsData = {
  name: '',
  email: '',
  telegram: '',
  github: '',
  course: '',
  institute: '',
  direction: '',
  group: '',
  coverLetter: '',
  selectedPositions: [],
  skills: '',
  teamRoles: [],
  languages: [],
  frameworks: '',
  additionalSkills: '',
  skillGrowth: '',
  hackathonClub: [],
  organizationalInfo: '',
  friends: '',
  joinClub: '',
  heardAboutClub: [],
};

const HackatonsSorting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [fieldsData, setFieldData] = useState(initialFieldsData);

  const [form] = Form.useForm();
  useEffect(() => {
    console.log(formData, 'formData');
  }, formData);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOptionChange = (e) => {
    console.log(`radio checked:${e.target.value}`);
  };

  const handleOk = () => {
    if (currentStep === 3) {
      setIsModalVisible(false);

      console.log('Отправляем данные:', fieldsData);
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setCurrentStep(1);
    form.resetFields();
  };

  return (
    <div className={styles.content}>
      <Select
        className={styles.antSelect}
        showSearch
        placeholder="Select category"
        optionFilterProp="children">
        <Option value="ds/ml/dl">DS/ML/DL</Option>
        <Option value="front">Front-end</Option>
        <Option value="back">Back-end</Option>
        <Option value="fullstack">Full-stack</Option>
        <Option value="design">Design</Option>
        <Option value="ctf">CTF</Option>
        <Option value="product">Product/Project Manager</Option>
        <Option value="analysts">Analysts and Marketers</Option>
        <Option value="gamedev">Game Development</Option>
        <Option value="robotics">Robotics</Option>
      </Select>

      <Select
        className={styles.antSelect}
        showSearch
        placeholder="Sort by"
        optionFilterProp="children">
        {/* Options go here */}
      </Select>

      <Select
        className={styles.antSelect}
        showSearch
        placeholder="Platform"
        optionFilterProp="children">
        {/* Options go here */}
      </Select>
      <Radio.Group onChange={handleOptionChange} defaultValue="a">
        <Radio.Button value="recommended">Рекомендованные</Radio.Button>
        <Radio.Button value="registrationOpen">Открыта регистрация</Radio.Button>
      </Radio.Group>
      <Button
        type="primary"
        className="ant-btn-animate"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}
        onClick={showModal}>
        Подать заявку в сборную
      </Button>

      {isModalVisible && (
        <ModalFormAssemblies
          isVisible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          updateFormData={(data) => setFormData({ ...formData, ...data })}
          form={form} // Передаем form пропсом
          fieldsData={fieldsData}
          setFieldData={setFieldData}
        />
      )}
    </div>
  );
};

export default HackatonsSorting;
