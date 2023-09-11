import { LikeOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import React from 'react';
import { Avatar, List, Space } from 'antd';
import { Link } from 'react-router-dom';
const data = [
  {
    id: 1,
    title: 'Team Alpha',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Team Beta',
    description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'Team Gamma',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 4,
    title: 'Team Delta',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    id: 5,
    title: 'Team Epsilon',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
  },
  {
    id: 6,
    title: 'Team Zeta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
const IconText = (props) => (
  <Space>
    {React.createElement(props.icon)}
    {props.text}
  </Space>
);
const TeamsList = () => (
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
      <Link to={`/teams/${item.id}`}>
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
      </Link>
    )}
  />
);
export default TeamsList;
