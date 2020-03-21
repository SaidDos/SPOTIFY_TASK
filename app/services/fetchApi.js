// this file used as a service in fetching APIs
import {BASE_URL, SPOTIFY_ACCESS_TOKEN} from '../utils/constants';

// here's where we handle errors
async function handleErrors(response) {
  if (response.status >= 200 && response.status < 400) {
    return response.json();
  } else {
    const body = await response.json();
    const err = new Error(body.error.message);
    throw err;
  }
}

const api = {
  getData(URL, Method) {
    return fetch(BASE_URL + URL, {
      method: Method,
      headers: {
        Authorization: 'Bearer ' + SPOTIFY_ACCESS_TOKEN,
      },
    }).then(handleErrors);
  },
};

export default api;
