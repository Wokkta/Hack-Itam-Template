import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './Pages/NotFoundPage';
import Layout from './components/Layout';
import UserPage from './Pages/UserPage';

function App() {
  const [count, setCount] = useState(0);

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
          <Route path="/test" element={<h1>There's something testing</h1>} />
          <Route path="*" element={<NotFound />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
