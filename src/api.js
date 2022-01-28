export const API_URL = 'http://dogsapi.origamid.dev/json'

export function TOKEN_POST(body) {
  return{
    url: API_URL + '/jwt-auth/v1/token',
    opition:{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(body),
    },
  }
}

export function USER_GET(token) {
  return{
    url: API_URL + '/api/user',
    opition:{
      method: 'GET',
      headers: {
       Authorization:'Bearer ' + token,
      },
    },
  }
}