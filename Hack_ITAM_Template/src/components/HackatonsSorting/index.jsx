import React, { useEffect, useState } from 'react';
import { Select } from 'antd';

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
    </div>
  );
};

export default HackatonsSorting;
