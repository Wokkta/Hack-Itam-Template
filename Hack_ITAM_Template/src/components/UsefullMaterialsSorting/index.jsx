import React, { useState } from 'react';
import { Button, Card, Select, Switch, Tag, notification } from 'antd';
import styles from './UsefullMaterialsSorting.module.sass';

import ModalFormToHelp from '../UI/Forms/Modal/ModalFormToHelp';
import { useSelector } from 'react-redux';

const { Option } = Select;

const UsefullMaterialsSorting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [recommendation, setRecommendation] = useState(false);
  const [tags, setTags] = useState([]);
  const [problemDescription, setProblemDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const user = useSelector((state) => state.user);
  const onChangeCategory = (value) => {
    setSelectedCategory(value);
  };
  const onSearch = (value) => {
    setQueryString(value);
  };
  const onRecommendationSwitch = (checked) => {
    setRecommendation(checked);
  };

  const onTagSelect = (tag) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const onTagClose = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

    const requestData = {
      userId: user.id,

      coverLetter: `Сопроводительное письмо: ${problemDescription} \n\n Профиль: ${JSON.stringify(
        user,
      )}`,

      selectedCategory: selectedCategory,
    };

    notification.success({
      message: 'Заявка отправлена',
      description: 'Ваша заявка отправлена на рассмотрение.',
    });

    console.log('Заявка отправлена:', requestData);
  };

  const handleCancel = () => {
    setIsModalVisible(false);

    setProblemDescription('');
    setSelectedCategory(null);
  };

  return (
    <div className={styles.content}>
      <div className={styles.switchContainer}>
        <Switch
          className={styles.switch}
          checked={recommendation}
          onChange={onRecommendationSwitch}
        />
        <span className={styles.switchLabel}>Recommendation</span>
      </div>
      {!recommendation ? (
        <>
          <Select
            className={styles.antSelect}
            showSearch
            placeholder="Select category"
            optionFilterProp="children"
            onChange={onChangeCategory}
            onSearch={onSearch}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'hackathon1',
                label: 'Хакатон 1',
              },
              {
                value: 'hackathon2',
                label: 'Хакатон 2',
              },
              // Добавьте другие хакатоны по аналогии...
            ]}
          />
        </>
      ) : (
        <>
          <div className={styles.tagsContainer}>
            <Select
              mode="tags"
              style={{ width: '100%', minWidth: '200px' }}
              placeholder="Select tags"
              value={tags}
              onChange={onTagSelect}>
              {[
                'AI',
                'Web Development',
                'Mobile Development',
                'Cybersecurity',
                'Artificial Intelligence', // Добавлен длинный тег для проверки ширины
              ].map((tag) => (
                <Option key={tag} value={tag}>
                  {tag}
                </Option>
              ))}
            </Select>
            <div className={styles.tagsList}>
              {tags.length ? (
                <Card>
                  {tags.map((tag) => (
                    <Tag
                      key={tag}
                      closable
                      onClose={() => onTagClose(tag)}
                      className={styles.tag}
                      style={{ minWidth: '20px' }}>
                      {tag}
                    </Tag>
                  ))}
                </Card>
              ) : (
                <></>
              )}
            </div>
          </div>
        </>
      )}
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
        Попросить помощь
      </Button>
      <ModalFormToHelp
        isVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        problemDescription={problemDescription}
        setProblemDescription={setProblemDescription}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={['айти', 'хакатоны', 'иное']} // Замените на свой список категорий
      />
    </div>
  );
};

export default UsefullMaterialsSorting;
