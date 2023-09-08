import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFoundPage';
import Layout from './components/Layout';
import UserPage from './Pages/UserPage';
import Hackatons from './Pages/Hackatons';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>here was Wokka</h1>
              </>
            }
          />
          <Route path="/test" element={<h1> There`s something testing</h1>} />
          <Route path="/hackatons/" element={<Hackatons />} />
          <Route path="/hackatons/:id" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
