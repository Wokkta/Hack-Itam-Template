import { useState } from 'react';
import axios from 'axios';

const useCheckAuth = () => {
  const checkAuth = async (formData) => {
    try {
      const response = await axios.post('URL_TO_YOUR_API_ENDPOINT', formData); // Замените на реальный URL сервера
      return { success: true, data: response.data };
    } catch (error) {
      return { success: false, message: 'Неверные данные' };
    }
  };

  return { checkAuth };
};

export default useCheckAuth;
