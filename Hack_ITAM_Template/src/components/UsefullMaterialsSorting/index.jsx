import React, { useState } from 'react';
import { Card, Select, Switch, Tag } from 'antd';
import styles from './UsefullMaterialsSorting.module.sass';

const { Option } = Select;

const UsefullMaterialsSorting = () => {
  const [queryString, setQueryString] = useState(''); // Хранение строки запроса
  const [category, setCategory] = useState();
  const [platform, setPlatform] = useState();
  const [sortBy, setSortBy] = useState();
  const [recommendation, setRecommendation] = useState(false);
  const [tags, setTags] = useState([]);

  const onChangeCategory = (value) => {
    setCategory(value);
  };

  const onSort = (value) => {
    setSortBy(value);
  };

  const onSortByPlatform = (value) => {
    setPlatform(value);
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
          <Select
            className={styles.antSelect}
            showSearch
            placeholder="Sort by"
            optionFilterProp="children"
            onChange={onSort}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'date',
                label: 'Date',
              },
              {
                value: 'popularity',
                label: 'Popularity',
              },
            ]}
          />
          <Select
            className={styles.antSelect}
            showSearch
            placeholder="Platform"
            optionFilterProp="children"
            onChange={onSortByPlatform}
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
              {
                value: 'pc',
                label: 'PC',
              },
              {
                value: 'browser',
                label: 'Browser',
              },
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
    </div>
  );
};

export default UsefullMaterialsSorting;
