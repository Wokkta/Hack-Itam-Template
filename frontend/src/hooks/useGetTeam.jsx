import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetTeam = (id) => {
  const [team, setTeam] = useState({
    id: id,
    team_name: 'Team Alpha',
    members: [
      {
        id: 1,
        username: 'user1',
        avatar: 'https://example.com/avatar1.jpg',
        professions: ['Frontend Developer', 'Designer'],
      },
      {
        id: 2,
        username: 'user2',
        avatar: 'https://example.com/avatar2.jpg',
        professions: ['Backend Developer', 'Tester'],
      },
      {
        id: 3,
        username: 'user3',
        avatar: 'https://example.com/avatar3.jpg',
        professions: ['UI/UX Designer'],
      },
    ],
    capitan: 1,
    image: '',
    description: '',
    vacancies: ['Tester', 'Mr BeerMan', 'Data Soyjack'],
  });

  useEffect(() => {
    const url = `http://158.160.58.123:8000/api-teams/${id}`;

    axios
      .get(url, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((response) => {
        setTeam(response.data);
      })
      .catch((error) => {
        console.error('Ошибка запроса:', error);
      });
  }, [id]);

  return team;
};

export default useGetTeam;
