export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    URL: API_URL + '/jwt-auth/v1/token',
    Option: {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}

export function USER_GET(token) {
  return {
    URL: API_URL + '/api/user',
    Option: {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}
