import HackatonsList from '../components/HackatonsList';
import HackatonsSorting from '../components/HackatonsSorting';

function Hackatons() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <HackatonsSorting />
      <HackatonsList />
    </section>
  );
}

export default Hackatons;
