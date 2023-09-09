import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';

import styles from './HackatonsSorting.module.sass';

const HackatonsSorting = () => {
  const [queryString, setQueryString] = useState(''); // Хранение строки запроса
  const [category, setCategory] = useState();
  const [platform, setPlatform] = useState();
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    buildQueryString({ platform, category, sortBy });
  }, [category, platform, sortBy]);

  // Функция для построения строки запроса
  const buildQueryString = (options) => {
    const queryParams = [];
    if (options.platform !== undefined) queryParams.push(`platform=${options.platform}`);
    if (options.category !== undefined) queryParams.push(`category=${options.category}`);
    if (options.sortBy !== undefined) queryParams.push(`sort-by=${options.sortBy}`);
    setQueryString(queryParams.join('&'));
    return queryParams.join('&');
  };

  const onChangeCategory = (value) => {
    setCategory(value);
    console.log(`selected ${value}`);
  };

  const onSort = (value) => {
    setSortBy(value);
    console.log('sorted by:', value);
  };

  const onSortByPlatform = (value) => {
    setPlatform(value);
    console.log('choosed platform:', value);
  };

  const onSearch = (value) => console.log(value);

  return (
    <div className={styles.content}>
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
            value: 'ds/ml/dl',
            label: 'DS/ML/DL',
          },
          {
            value: 'front',
            label: 'Frontend Developer',
          },
          {
            value: 'back',
            label: 'Backend Developer',
          },
          {
            value: 'fullstack',
            label: 'Full Stack Developer',
          },
          {
            value: 'design',
            label: 'Designer',
          },
          {
            value: 'ctf',
            label: 'CTF',
          },
          {
            value: 'product',
            label: 'Product/Project Manager',
          },
          {
            value: 'analysts',
            label: 'Analysts and Marketers',
          },
          {
            value: 'gamedev',
            label: 'Game Developer',
          },
          {
            value: 'robotics',
            label: 'Robotics',
          },
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
          // Добавьте другие опции сортировки по аналогии...
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
          // Добавьте другие платформы по аналогии...
        ]}
      />
      <Button
        type="primary"
        className="ant-btn-animate"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '20px',
        }}>
        Подать заявку в сборную
      </Button>
    </div>
  );
};

export default HackatonsSorting;
