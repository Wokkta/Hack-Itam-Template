import { List, Typography, Spin, Card } from 'antd';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const { Title, Text } = Typography;

function HackatonsList() {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const hackatons = useSelector((state) => state.hackatons);
  const totalItems = hackatons.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  console.log(hackatons);
  const paginatedData = hackatons.slice(startIndex, endIndex);

  useEffect(() => {
    setLoading(true);

    setLoading(false);
  }, []);
  useEffect(() => {
    console.log(hackatons);
  }, [hackatons.length]);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={paginatedData}
        pagination={{
          onChange: handlePageChange,
          total: totalItems,
          pageSize: itemsPerPage,
          position: 'bottom',
          align: 'center',
        }}
        renderItem={(item) => (
          <List.Item>
            <Link to={`/hackatons/${item.id}`}>
              <Card
                hoverable
                style={{ width: 400 }}
                cover={
                  <img
                    alt={item.title}
                    src={item.photo}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                }>
                <Card.Meta title={item.title} description={`Место проведения: ${item.location}`} />
                <Text strong>Даты проведения: </Text>
                <Text>{item.dates.проведения}</Text>
                <br />
                <Text strong>Даты регистрации: </Text>
                <Text>{item.dates.регистрации}</Text>
                <br />
                <Text strong>Формат: </Text>
                <Text>{item.format}</Text>
                <br />
                <Text strong>
                  {item.registrationOpen ? 'Регистрация открыта' : 'Регистрация закрыта'}{' '}
                </Text>
              </Card>
            </Link>
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

export default HackatonsList;
