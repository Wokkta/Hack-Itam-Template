import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Select, Row, Col, Button, notification } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const ModalFormAssemblies = ({
  isVisible,
  onOk,
  onCancel,
  currentStep,
  setCurrentStep,
  updateFormData,
  form,
  fieldsData,
  setFieldData,
}) => {
  const isLastStep = currentStep === 3;

  const handleOk = () => {
    if (isLastStep) {
      form.validateFields().then((values) => {
        onOk(values);
      });
      setCurrentStep(1);
      notification.success({
        message: 'Заявка в сборную отправлена',
        description: 'Ваша заявка отправлена на рассмотрение.',
      });
    } else {
      form.validateFields().then((values) => {
        updateFormData(values);
      });
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    form.validateFields().then((values) => {
      updateFormData(values);
    });
  };

  const handleFieldChange = (fieldName, value) => {
    setFieldData({ ...fieldsData, [fieldName]: value });
  };

  return (
    <Modal
      title="Подать заявку"
      visible={isVisible}
      onOk={handleOk}
      onCancel={onCancel}
      footer={false}
      width={'60vmax'}>
      <Form form={form}>
        {currentStep === 1 && (
          <>
            <h2>1 этап</h2>
            <Form.Item label="Как тебя зовут? (ФИО)">
              <Input
                value={fieldsData.name}
                onChange={(e) => handleFieldChange('name', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Контактная почта (какую чаще читаешь)">
              <Input
                value={fieldsData.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Телеграм">
              <Input
                value={fieldsData.telegram}
                onChange={(e) => handleFieldChange('telegram', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Репозиторий Github/GitLab/Behance/иное">
              <Input
                value={fieldsData.github}
                onChange={(e) => handleFieldChange('github', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Курс">
              <Select
                value={fieldsData.course}
                onChange={(value) => handleFieldChange('course', value)}>
                {[1, 2, 3, 4, 'Выпускник', 5, 6].map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Институт">
              <Select
                value={fieldsData.institute}
                onChange={(value) => handleFieldChange('institute', value)}>
                {['ИТКН', 'ИНМИН', 'ГИ', 'Экотех', 'Другое'].map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Направление">
              <Select
                value={fieldsData.direction}
                onChange={(value) => handleFieldChange('direction', value)}>
                {['ПМ', 'ИВТ', 'ИВТ(ИСАД)', 'Другое'].map((item) => (
                  <Option key={item} value={item}>
                    {item}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}

        {currentStep === 2 && (
          <>
            <h2>2 этап</h2>
            <Form.Item label="Skills">
              <TextArea
                rows={4}
                value={fieldsData.skills}
                onChange={(e) => handleFieldChange('skills', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Расскажи что умеешь">
              <TextArea
                rows={4}
                value={fieldsData.additionalSkills}
                onChange={(e) => handleFieldChange('additionalSkills', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Какую роль ты можешь занимать в сборной? *">
              <Checkbox.Group
                value={fieldsData.teamRoles}
                onChange={(values) => handleFieldChange('teamRoles', values)}>
                <Checkbox value="Менеджер проекта">Менеджер проекта</Checkbox>
                <Checkbox value="DevOps инженер">DevOps инженер</Checkbox>
                <Checkbox value="QA инженер">QA инженер</Checkbox>
                <Checkbox value="UI/UX дизайнер">UI/UX дизайнер</Checkbox>
                <Checkbox value="Аналитик данных">Аналитик данных</Checkbox>
                <Checkbox value="Системный архитектор">Системный архитектор</Checkbox>
                <Checkbox value="Технический писатель">Технический писатель</Checkbox>
                <Checkbox value="Другое">Другое</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label="Какие знаешь языки? *">
              <Checkbox.Group
                value={fieldsData.languages}
                onChange={(values) => handleFieldChange('languages', values)}>
                <Checkbox value="C#">C#</Checkbox>
                <Checkbox value="C++">C++</Checkbox>
                <Checkbox value="Ruby">Ruby</Checkbox>
                <Checkbox value="Go">Go</Checkbox>
                <Checkbox value="PHP">PHP</Checkbox>
                <Checkbox value="Swift">Swift</Checkbox>
                <Checkbox value="Kotlin">Kotlin</Checkbox>
                <Checkbox value="TypeScript">TypeScript</Checkbox>
                <Checkbox value="Rust">Rust</Checkbox>
                <Checkbox value="Python">Python</Checkbox>
                <Checkbox value="Objective-C">Objective-C</Checkbox>
                <Checkbox value="Dart">Dart</Checkbox>
                <Checkbox value="Perl">Perl</Checkbox>
                <Checkbox value="Fortran">Fortran</Checkbox>
                <Checkbox value="Haskell">Haskell</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            <Form.Item label="На каких фреймворках работаешь?">
              <TextArea
                rows={4}
                value={fieldsData.frameworks}
                onChange={(e) => handleFieldChange('frameworks', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Что еще хотелось бы рассказать о своих навыках? О чем мы не спросили тебя?">
              <TextArea
                rows={4}
                value={fieldsData.skillGrowth}
                onChange={(e) => handleFieldChange('skillGrowth', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="В какую сторону ты стараешься расти с точки зрения навыков?">
              <TextArea
                rows={4}
                value={fieldsData.skillGrowth}
                onChange={(e) => handleFieldChange('skillGrowth', e.target.value)}
              />
            </Form.Item>
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2>3 этап Хакатон клуб</h2>

            <Form.Item label="Немного организационных моментов :)" labelCol={{ span: 24 }}>
              <TextArea
                rows={4}
                value={fieldsData.organizationalInfo}
                onChange={(e) => handleFieldChange('organizationalInfo', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Есть ли у тебя друзья/одногруппники, которых ты хочешь видеть с тобой в сборных? Если да, то напиши их телеграм-Ники и отправь им эту анкету."
              labelCol={{ span: 24 }}>
              <TextArea
                rows={4}
                value={fieldsData.friends}
                onChange={(e) => handleFieldChange('friends', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              label="Есть ли у тебя желание присоединиться к команде Хакатон клуба и помочь с его развитием? Если да, то чем?"
              labelCol={{ span: 24 }}>
              <TextArea
                rows={4}
                value={fieldsData.joinClub}
                onChange={(e) => handleFieldChange('joinClub', e.target.value)}
              />
            </Form.Item>
            <Form.Item
              labelCol={{ span: 24 }}
              label="В рамках перезапуска Хакатон клуба у нас планируется начало по нескольким важным направлениям. Если у тебя есть желание в том числе прокачаться как организатор, стратег и лидер, то это отличная возможность.">
              <TextArea
                rows={4}
                value={fieldsData.clubPlans}
                onChange={(e) => handleFieldChange('clubPlans', e.target.value)}
              />
            </Form.Item>
            <Form.Item label="Я впервые слышу о хакатон клубе..." labelCol={{ span: 24 }}>
              <Checkbox.Group
                value={fieldsData.heardAboutClub}
                onChange={(values) => handleFieldChange('heardAboutClub', values)}>
                <Checkbox value="Да">Да</Checkbox>
                <Checkbox value="Нет">Нет</Checkbox>
              </Checkbox.Group>
            </Form.Item>
          </>
        )}

        <Form.Item>
          {isLastStep ? (
            <Button type="primary" onClick={handleOk}>
              Отправить
            </Button>
          ) : (
            <Button type="primary" onClick={handleNextStep}>
              Далее
            </Button>
          )}
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormAssemblies;
