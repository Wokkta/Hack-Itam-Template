import { List, Card, Typography, Divider } from 'antd';

const { Text } = Typography;
const data = Array.from({ length: 23 }).map((_, i) => ({
  href: 'https://example.com',
  title: `Пример достижения ${i}`,
  avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
  description: 'Бот для людей',
  content: ' такую крутую фичу забабахал, бот для алкатонов',
}));

const UserHackatonList = () => (
  <List
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 2,
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
        <Card title={item.title}>
          <Text>{item.description}</Text>
          <Divider />
          <Text>{item.content}</Text>
        </Card>
      </List.Item>
    )}
  />
);
export default UserHackatonList;
