export const API_URL = 'https://dogsapi.origamid.dev/json';

export function TOKEN_POST(body) {
  return {
    URL: API_URL + '/jwt-auth/v1/token',
    Option: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    },
  };
}
export function TOKEN_VALIDATE_POST(token) {
  return {
    URL: API_URL + '/jwt-auth/v1/token/validate',
    Option: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_GET(token) {
  return {
    URL: API_URL + '/api/user',
    Option: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
  };
}

export function USER_POST(body) {
  return {
    URL: API_URL + '/api/user',
    Option: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),

    },
  };
}

export function PHOTO_POST(formData,token) {
  return {
    URL: API_URL + '/api/user',
    Option: {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    },
    body: formData,
  };
}
export function PHOTOS_GET({page,total , user}) {
  return {
    URL: `${API_URL}/api/photos/?_page=${page}&_total=${total}&_user=${user}`,
    Option: {
      method: 'POST',
      cache: 'no-store'
    },
   
  };
}
