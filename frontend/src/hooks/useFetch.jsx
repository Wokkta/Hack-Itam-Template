import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setHackatons } from '../store/Slices/hackatonsSlice';

const useFetch = (initialOptions) => {
  const dispatch = useDispatch();
  const maxRetryAttempts = 3;
  useEffect(() => {
    let retryCount = 0;

    const fetchHackatons = async (options) => {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?${options.queryString}`;

      const headers = {
        'X-RapidAPI-Key': '2206ee3d34msh12d125ce21f758ep1f37d6jsn7613baf538d4',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      };

      try {
        const response = await fetch(url, { method: 'GET', headers });
        const result = await response.json();
        dispatch(setGames(result));
      } catch (error) {
        console.error('Error fetching hackatons:', error);
        if (retryCount < maxRetryAttempts) {
          retryCount++;
          console.log(`Retrying (${retryCount} of ${maxRetryAttempts})...`);
          fetchHackatons(options);
        } else {
          console.error(`Max retry attempts (${maxRetryAttempts}) reached.`);
          setHackatons([
            {
              id: 1,
              title: 'The Fantasy Quest',
              release_date: '15.10.2023',
              publisher: 'Mystic Studios',
              developer: 'Adventure Game Studios',
              genre: 'Adventure',
              thumbnail: 'fantasy_quest_poster.jpg',
              screenshots: [
                'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
                'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
                'https://i.ytimg.com/vi/OEV8UK_Nn-w/maxresdefault.jpg',
              ],
              systemRequirements: {
                os: 'Windows 10',
                processor: 'Intel Core i5',
                memory: '8 GB RAM',
                graphics: 'NVIDIA GeForce GTX 1060',
                storage: '20 GB available space',
              },
            },
          ]);
          alert(
            `Retrying (${maxRetryAttempts}) reached please try again later or contact the administrator`,
          );
        }
      }
    };

    fetchHackatons(initialOptions);
  }, [initialOptions.queryString]);
};

export default useFetch;
