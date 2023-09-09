import { useParams } from 'react-router-dom';
import NotFound from './NotFoundPage';
import HackatonContent from '../components/HackatonContent';
function HackatonPage() {
  const { id } = useParams();
  const data = {
    title: 'Хакатон 1',
    location: 'Москва',
    format: 'offline',
    teamComposition: '3-5 участников',
    rating: '4.5',
    solutions: [
      { title: 'Решение 1', link: 'https://youtube.com' },
      { title: 'Решение 2', link: 'https://figma.com' },
      { title: 'Решение 2', link: 'https://github.com' },
    ],
    photo: 'https://example.com/hackaton1.jpg',
    dates: '10-12 сентября 2022',
    registrationDates: '1-30 августа 2022',
    description:
      'Это описание хакатона 1.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus assumenda delectus cum, id quae accusamus quas placeat ea culpa? Labore iure aut eius facere eos quam ut? Minus, in officiis! ',
  };
  return (
    <section>
      <div>{<HackatonContent id={id || ''} data={data} /> || <NotFound />}</div>
    </section>
  );
}

export default HackatonPage;
