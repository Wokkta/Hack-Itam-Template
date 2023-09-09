import { Typography, List, Avatar, Divider } from 'antd';

import GithubIcon from '../../assets/GithubIcon.png';
import YoutubeIcon from '../../assets/YoutubeIcon.png';
import HabrIcon from '../../assets/HabrIcon.png';
import FigmaIcon from '../../assets/FigmaIcon.png';

const { Title, Text } = Typography;

function HackatonContent({ data }) {
  return (
    <div
      style={{
        display: 'flex',
        width: '100vw',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap-reverse',
          justifyContent: 'space-between',
          gap: '100px',
          alignItems: 'flex-end',
          maxWidth: '1200px',

          margin: '0 auto',
          padding: '16px',
        }}>
        <div style={{ maxWidth: '400px' }}>
          <Title level={2}>{data.title}</Title>
          <Divider />
          <List>
            <List.Item>
              <Text strong>Место проведения:</Text> {data.location}
            </List.Item>
            <List.Item>
              <Text strong>Формат:</Text> {data.format}
            </List.Item>
            <List.Item>
              <Text strong>Состав команды:</Text> {data.teamComposition}
            </List.Item>
            <List.Item>
              <Text strong>Оценка:</Text> {data.rating}
            </List.Item>
            <List.Item>
              <Text strong>Решения:</Text>
              <div style={{ display: 'flex', minWidth: '100px', justifyContent: 'space-between' }}>
                {data?.solutions && (
                  <>
                    {data.solutions.map((solution, index) => {
                      let iconSrc = '';
                      let altText = '';

                      if (solution.link.includes('github')) {
                        iconSrc = GithubIcon;
                        altText = 'GitHub';
                      } else if (solution.link.includes('youtube')) {
                        iconSrc = YoutubeIcon;
                        altText = 'YouTube';
                      } else if (solution.link.includes('habr')) {
                        iconSrc = HabrIcon;
                        altText = 'Habr';
                      } else if (solution.link.includes('figma')) {
                        iconSrc = FigmaIcon;
                        altText = 'Figma';
                      }

                      return (
                        <a href={solution.link} key={index}>
                          <img
                            src={iconSrc}
                            alt={altText}
                            style={{ width: '30px', height: '30px' }}
                          />
                        </a>
                      );
                    })}
                  </>
                )}
              </div>
            </List.Item>
          </List>
          <Divider />
          <div>
            <Text strong>Даты проведения: </Text>
            <Text>{data.dates}</Text>
          </div>
          <Divider />
          <div>
            <Text strong>Даты регистрации: </Text>
            <Text>{data.registrationDates}</Text>
          </div>
          <Divider />
          <div>
            <Title level={3}>Секция с комментариями и описанием</Title>
            <Text>{data.description}</Text>
          </div>
        </div>
        <img
          src={
            'https://static.tildacdn.com/tild3833-3838-4337-b635-666564323962/rlt_hack.png' ||
            data.photo
          }
          alt={data.title}
          style={{ maxWidth: '600px', width: '100%', height: 'auto' }}
        />
      </div>
    </div>
  );
}

export default HackatonContent;
