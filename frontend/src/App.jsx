import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFoundPage';
import Layout from './components/Layout';
import UserPage from './Pages/UserPage';
import HackatonsPage from './Pages/HackatonsPage';
import UsefullMaterialsPage from './Pages/UsefullMaterials';
import HackatonPage from './Pages/HackatonPage';
import CommandPage from './Pages/CommandPage';
import RegistrationPage from './Pages/RegistrationPage';
import MainPage from './Pages/MainPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/test" element={<RegistrationPage />} />
          <Route path="/hackatons/" element={<HackatonsPage />} />
          <Route path="/hackatons/:id" element={<HackatonPage />} />
          <Route path="/teams/:id" element={<CommandPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Materials" element={<UsefullMaterialsPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
