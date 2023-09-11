import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox, Select } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

const ModalFormToHelp = ({
  isVisible,
  onOk,
  onCancel,
  problemDescription,
  setProblemDescription,
  selectedCategory,
  setSelectedCategory,

  setSelectedPositions,
  categories,
  itPositions,
}) => {
  const handlePositionChange = (selected) => {
    setSelectedPositions(selected);
  };

  return (
    <Modal title="Подать заявку" visible={isVisible} onOk={onOk} onCancel={onCancel}>
      <Form>
        <Form.Item label="Опишите вашу проблему" required labelCol={{ span: 24 }}>
          <TextArea
            rows={4}
            value={problemDescription}
            onChange={(e) => setProblemDescription(e.target.value)}
          />
        </Form.Item>
        <Form.Item label="Категория" required={true} labelCol={{ span: 24 }}>
          <Select value={selectedCategory} onChange={(value) => setSelectedCategory(value)}>
            {categories.map((category) => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalFormToHelp;
