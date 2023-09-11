import React, { useState } from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';

const { TextArea } = Input;

const ModalForm = ({
  isVisible,
  onOk,
  onCancel,
  allProfessions,
  coverLetter,
  setCoverLetter,
  selectedPositions,
  setSelectedPositions,
}) => {
  const handlePositionChange = (selected) => {
    setSelectedPositions(selected);
  };

  return (
    <Modal title="Подать заявку" visible={isVisible} onOk={onOk} onCancel={onCancel}>
      <Form>
        <Form.Item>
          <span>
            Кроме вашего сопроводительного письма команда получит также информацию о вашем профиле
          </span>
        </Form.Item>
        <Form.Item label="Сопроводительное письмо">
          <TextArea rows={4} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} />
        </Form.Item>
        <Form.Item label="Выберите позиции" required={true}>
          <Checkbox.Group value={selectedPositions} onChange={handlePositionChange}>
            {allProfessions.map((position) => (
              <Checkbox key={position} value={position}>
                {position}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
