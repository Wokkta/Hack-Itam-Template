import Header from '../UI/Headers/Header';
import Footer from '../UI/Footers/Footer';

function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
}

export default Layout;
