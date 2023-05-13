import axios from 'axios';

export const getUser = (setApiOutput) => {
  axios.post('https://dummyjson.com/auth/login', {
  username: 'kminchelle',
  password: '0lelplR',
  // expiresInMins: 60, // opcional
}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    // Manipular a resposta do servidor
    setApiOutput(response.data)
  })
  .catch(error => {
    // Lidar com erros
    console.error(error);
  });
}

export const fetchAPI = async (url) => {
  const data = await fetch(url);
  return await data.json();
}
