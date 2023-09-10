import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Select, Row, Col, Button } from 'antd';

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
      footer={false}>
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
            {/* Add other fields of step 2 */}
          </>
        )}

        {currentStep === 3 && (
          <>
            <h2>3 этап</h2>
            <Form.Item label="Хакатон клуб">
              <Checkbox.Group
                value={fieldsData.hackathonClub}
                onChange={(values) => handleFieldChange('hackathonClub', values)}>
                <Checkbox value="Да">Да</Checkbox>
                <Checkbox value="Нет">Нет</Checkbox>
              </Checkbox.Group>
            </Form.Item>
            {/* Add other fields of step 3 */}
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
