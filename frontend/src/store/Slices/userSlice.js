import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 12,
  url: '',
  fio: ' Антонио Бандерас',
  username: 'Zorro',
  portfolio: 'https://example.com/portfolio',
  media: {
    microsoftTeams: 'https://microsoft.com',
    telegram: 'https://telegram',
    vk: 'https://vk.com',
  },
  Descriptions_items: [
    {
      label: 'Количество участий в хакатонах',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: '12',
    },

    {
      label: 'Роль(и)',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'backend developer, frontend developer',
    },
    {
      label: 'Используемые технологии',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'JavaScript, HTML, CSS, Node.js, React',
    },
    {
      label: 'Используемые языки программирования',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: 'JavaScript, HTML, CSS',
    },
    {
      label: 'Количество созданных материалов',
      span: {
        xs: 1,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 2,
        xxl: 2,
      },
      children: '50',
    },
  ],
}; /// Заменить на норм дату

export const userSlice = createSlice({
  name: 'hackatons',
  initialState,
  reducers: {
    setUsers: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setUsers } = userSlice.actions;

export default userSlice.reducer;
