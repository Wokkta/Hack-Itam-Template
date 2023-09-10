import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchHackaton = (id) => {
  const [hackaton, setHackaton] = useState(undefined);

  useEffect(() => {
    const url = `http://158.160.58.123:8000/api-hacks/${id}`;

    axios
      .get(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setHackaton(response.data);
      })
      .catch((error) => {
        console.error('Ошибка запроса:', error);
      });
  }, [id]);

  return hackaton;
};

export default useFetchHackaton;
