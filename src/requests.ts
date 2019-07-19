import axios from 'axios';

const CORS_ANYWHERE = 'https://cors-anywhere.herokuapp.com/';
const APP_KEY = 'MmQzN2FlZmMtMDdlYy00ZjAzLWFiN2UtYWYxY2Q3Zjg0NmRlOmI5MmEwM2ZhNDUzZjQ4MDY5N2NjZDQzMzM2ZmQwNTg4';

export const getAuthToken = () => {
  const token = axios.post(
    `${CORS_ANYWHERE}https://developers.lingvolive.com/api/v1.1/authenticate`,
    {},
    {
      headers: {
        Authorization: `Basic ${APP_KEY}`
      }
    }
  );

  return token;
};

