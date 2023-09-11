import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NotFound from './Pages/NotFoundPage';
import Layout from './components/Layout';
import UserPage from './Pages/UserPage';
import HackatonsPage from './Pages/HackatonsPage';
import UsefullMaterialsPage from './Pages/UsefullMaterials';
import HackatonPage from './Pages/HackatonPage';

import RegistrationPage from './Pages/RegistrationPage';
import MainPage from './Pages/MainPage';
import TeamPage from './Pages/TeamPage';
import AuthPage from './Pages/AuthPage';

function App() {
  return (
    <Router>
      <Layout>
        <Background />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/hackatons/" element={<HackatonsPage />} />
          <Route path="/hackatons/:id" element={<HackatonPage />} />
          <Route path="/teams/:id" element={<TeamPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Materials" element={<UsefullMaterialsPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import React from 'react';

const Background = () => {
  return (
    <div className="background">
      <div className="blur-overlay"></div>
      <div className="shapes">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        {/* Добавьте дополнительные элементы shape по вашему выбору */}
      </div>
    </div>
  );
};
