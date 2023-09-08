import { List, Typography, Spin } from 'antd';
import { useState, useEffect } from 'react';
import HackatonsSorting from '../components/HackatonsSorting';

const { Title, Text } = Typography;

const fetchData = () => {
  // Имитация загрузки данных
  return new Promise((resolve) => {
    setTimeout(() => {
      const newData = [
        {
          title: 'Хакатон 1',
          dates: {
            проведения: '10-12 сентября 2022',
            регистрации: '1-30 августа 2022',
          },
          photo:
            'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
        },
        {
          title: 'Хакатон 2',
          dates: {
            проведения: '5-7 октября 2022',
            регистрации: '1-30 сентября 2022',
          },
          photo:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
        },
        {
          title: 'Хакатон -6',
          dates: {
            проведения: '10-12 сентября 2022',
            регистрации: '1-30 августа 2022',
          },
          photo:
            'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
        },
        {
          title: 'Хакатон -5',
          dates: {
            проведения: '5-7 октября 2022',
            регистрации: '1-30 сентября 2022',
          },
          photo:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
        },
        {
          title: 'Хакатон -4',
          dates: {
            проведения: '10-12 сентября 2022',
            регистрации: '1-30 августа 2022',
          },
          photo:
            'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
        },
        {
          title: 'Хакатон -3',
          dates: {
            проведения: '5-7 октября 2022',
            регистрации: '1-30 сентября 2022',
          },
          photo:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
        },
        {
          title: 'Хакатон -2',
          dates: {
            проведения: '10-12 сентября 2022',
            регистрации: '1-30 августа 2022',
          },
          photo:
            'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
        },
        {
          title: 'Хакатон -1',
          dates: {
            проведения: '5-7 октября 2022',
            регистрации: '1-30 сентября 2022',
          },
          photo:
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
        },
        // Добавьте другие хакатоны по аналогии...
      ];
      resolve(newData);
    }, 1000);
  });
};

function Hackatons() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  useEffect(() => {
    setLoading(true);
    fetchData().then((newData) => {
      setData((prevData) => [...prevData, ...newData]);
      setLoading(false);
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HackatonsSorting></HackatonsSorting>
      <List
        itemLayout="vertical"
        dataSource={paginatedData}
        pagination={{
          onChange: handlePageChange,
          total: totalItems,
          pageSize: itemsPerPage,
          position: 'bottom',
          align: 'center',
        }}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            style={{ height: '200px', width: '1200px' }}
            extra={
              item.photo && (
                <img
                  src={item.photo}
                  alt={item.title}
                  style={{ height: '100%', objectFit: 'cover', width: '200px' }}
                />
              )
            }>
            <Title level={4}>{item.title}</Title>
            <Text strong>Даты проведения: </Text>
            <Text>{item.dates.проведения}</Text>
            <br />
            <Text strong>Даты регистрации: </Text>
            <Text>{item.dates.регистрации}</Text>
          </List.Item>
        )}
      />
      {loading && (
        <div style={{ textAlign: 'center', margin: '16px' }}>
          <Spin size="large" />
        </div>
      )}
    </section>
  );
}

export default Hackatons;
