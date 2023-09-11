import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    title: 'Хакатон 1',
    dates: {
      проведения: '10-12 сентября 2022',
      регистрации: '1-30 августа 2022',
    },
    format: 'online',
    location: 'Онлайн',
    registrationOpen: true,
    photo:
      'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
    id: 1,
  },
  {
    title: 'Хакатон 2',
    dates: {
      проведения: '5-7 октября 2022',
      регистрации: '1-30 сентября 2022',
    },
    format: 'offline',
    location: 'Москва',
    registrationOpen: false,
    photo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
    id: 1,
  },
  {
    title: 'Хакатон 3',
    dates: {
      проведения: '10-12 сентября 2022',
      регистрации: '1-30 августа 2022',
    },
    format: 'online',
    location: 'Онлайн',
    registrationOpen: true,
    photo:
      'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
    id: 1,
  },
  {
    title: 'Хакатон 4',
    dates: {
      проведения: '5-7 октября 2022',
      регистрации: '1-30 сентября 2022',
    },
    format: 'offline',
    location: 'Москва',
    registrationOpen: false,
    photo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
    id: 1,
  },
  {
    title: 'Хакатон 5',
    dates: {
      проведения: '10-12 сентября 2022',
      регистрации: '1-30 августа 2022',
    },
    format: 'online',
    location: 'Онлайн',
    registrationOpen: true,
    photo:
      'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
    id: 1,
  },
  {
    title: 'Хакатон 6',
    dates: {
      проведения: '5-7 октября 2022',
      регистрации: '1-30 сентября 2022',
    },
    format: 'offline',
    location: 'Москва',
    registrationOpen: false,
    photo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
    id: 1,
  },
  {
    title: 'Хакатон 5',
    dates: {
      проведения: '10-12 сентября 2022',
      регистрации: '1-30 августа 2022',
    },
    format: 'online',
    location: 'Онлайн',
    registrationOpen: true,
    photo:
      'https://thumb.tildacdn.com/tild3061-6435-4061-b562-616135313134/-/cover/312x312/center/center/-/format/webp/123.png',
    id: 1,
  },
  {
    title: 'Хакатон 6',
    dates: {
      проведения: '5-7 октября 2022',
      регистрации: '1-30 сентября 2022',
    },
    format: 'offline',
    location: 'Москва',
    registrationOpen: false,
    photo:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.SiVeFrZjOhdaQmcd5NI-CQHaEK%26pid%3DApi&f=1&ipt=308c5cdc050594f9106c8eceff0b702891b904c0dfa2986392f5bbc5dd68ca15&ipo=images',
    id: 1,
  },
];

export const hackatonsSlice = createSlice({
  name: 'hackatons',
  initialState,
  reducers: {
    setHackatons: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setHackatons } = hackatonsSlice.actions;

export default hackatonsSlice.reducer;
