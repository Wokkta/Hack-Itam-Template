import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetUser = (id) => {
  const [user, setUser] = useState({
    id: 1,
    username: 'sab_boy',
    status: 'admin',
    name: 'Арсений Синицын',
    social_networks: {
      github: 'su-mrak',
      telegram: '@creamsoda0',
      vk: 'nitumisis',
    },
    stack: ['c++', 'python', 'fastapi'],
    tags: [],
    image: 'string',
    description: "I wish u best but I'm the best.",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = `http://158.160.58.123:8000/api-users/${id}`;
    setTimeout(() => setLoading(false), 1000);
    axios
      .get(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  return { user, loading, error };
};

export default useGetUser;
