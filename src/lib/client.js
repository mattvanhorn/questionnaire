import axios from 'axios';

const API_URL = process.env.API_URL;
const config = {
  headers: {
    Authorization: 'Bearer ' + process.env.API_TOKEN,
  }
}

export const getQuestionnaires = (cb) => {
  const url = `${API_URL}/questionnaires`;

  axios.get(url, config).then(response => response.data)
    .then((data) => {
      cb(data);
    })
}

export const postQuestionnaire = (data, cb) => {
  const url = `${API_URL}/questionnaires`;
  axios.post(url, data, config).then(response => response.data)
    .then((data) => {
      cb(data);
    })
}
