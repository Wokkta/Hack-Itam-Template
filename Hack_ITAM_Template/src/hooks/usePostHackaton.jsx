import { useState, useEffect } from 'react';
import axios from 'axios';

const usePostHackaton = ({ values }) => {
  const [hackaton, setHackaton] = useState(undefined);

  useEffect(() => {
    const url = `http://158.160.58.123:8000/api-hacks/`;

    axios
      .post(url, values, {
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
  }, [values]);

  return hackaton;
};

export default usePostHackaton;
