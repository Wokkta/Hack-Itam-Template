import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List, Space } from 'antd';
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
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
      position: 'bottom',
      align: 'center',
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default UserHackatonList;
