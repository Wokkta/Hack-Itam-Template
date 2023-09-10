import { List, Card } from 'antd';
const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://example.com',
  title: `Пример хакатона ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description:
    'Пример хакатона - это мероприятие, где разработчики идеализируют, проектируют и создают программное обеспечение или аппаратное обеспечение за ограниченное время.',
  content:
    'Хакатоны обычно представляют собой соревнование, где участники работают в командах, чтобы решить реальные проблемы или создать новые продукты и сервисы.',
}));
const IconText = (props) => (
  <Space>
    {React.createElement(props.icon)}
    {props.text}
  </Space>
);
const UserHackatonList = () => (
  <List
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 6,
      position: 'bottom',
      align: 'center',
    }}
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default UserHackatonList;
