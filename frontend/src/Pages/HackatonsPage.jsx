import HackatonsList from '../components/HackatonsList';
import HackatonsSorting from '../components/HackatonsSorting';

function HackatonsPage() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HackatonsSorting />
      <HackatonsList />
    </section>
  );
}

export default HackatonsPage;
